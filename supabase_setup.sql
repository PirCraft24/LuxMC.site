
-- Tickets Tabelle erstellen
CREATE TABLE IF NOT EXISTS tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  username TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS für Tickets aktivieren
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- Policy: Benutzer können nur ihre eigenen Tickets sehen
CREATE POLICY "Users can view own tickets" ON tickets
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Benutzer können eigene Tickets erstellen
CREATE POLICY "Users can create own tickets" ON tickets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Nur Admins können alle Tickets sehen und bearbeiten
CREATE POLICY "Admins can view all tickets" ON tickets
  FOR SELECT USING (
    (auth.jwt() ->> 'user_metadata')::json ->> 'is_admin' = 'true'
  );

CREATE POLICY "Admins can update all tickets" ON tickets
  FOR UPDATE USING (
    (auth.jwt() ->> 'user_metadata')::json ->> 'is_admin' = 'true'
  );

-- Trigger für updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON tickets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Admin Benutzer erstellen (ersetzen Sie die E-Mail mit Ihrer eigenen)
-- Führen Sie diesen Befehl nach der Registrierung aus:
-- UPDATE auth.users 
-- SET raw_user_meta_data = raw_user_meta_data || '{"is_admin": true}'::jsonb
-- WHERE email = 'ihre-email@example.com';
