
import React, { useState, useEffect } from 'react';
import { useAuth, supabase } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created_at: string;
}

const Tickets = () => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchUserTickets();
    }
  }, [user]);

  const fetchUserTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('tickets').insert({
        title,
        description,
        priority,
        status: 'open',
        user_id: user?.id,
        user_email: user?.email,
        username: user?.user_metadata?.username || user?.email,
      });

      if (error) throw error;

      toast({
        title: "Ticket erstellt",
        description: "Ihr Support-Ticket wurde erfolgreich erstellt",
      });

      setTitle('');
      setDescription('');
      setPriority('medium');
      setShowForm(false);
      fetchUserTickets();
    } catch (error) {
      console.error('Error creating ticket:', error);
      toast({
        title: "Fehler beim Erstellen des Tickets",
        description: "Bitte versuchen Sie es erneut",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-500';
      case 'in_progress': return 'text-yellow-500';
      case 'closed': return 'text-green-500';
      default: return '';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold glow-text mb-2">Support Tickets</h1>
          <p className="text-muted-foreground">Verwalten Sie Ihre Support-Anfragen</p>
        </div>

        <div className="mb-6">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="glow-hover"
          >
            {showForm ? 'Formular schließen' : 'Neues Ticket erstellen'}
          </Button>
        </div>

        {showForm && (
          <Card className="glass-panel mb-8">
            <CardHeader>
              <CardTitle>Neues Support-Ticket</CardTitle>
              <CardDescription>Beschreiben Sie Ihr Problem oder Ihre Anfrage</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titel</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="bg-black/20 border-white/20"
                    placeholder="Kurze Beschreibung des Problems"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Beschreibung</Label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-3 rounded-md bg-black/20 border border-white/20 text-white min-h-[100px]"
                    placeholder="Detaillierte Beschreibung des Problems..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priorität</Label>
                  <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                    className="w-full p-3 rounded-md bg-black/20 border border-white/20 text-white"
                  >
                    <option value="low">Niedrig</option>
                    <option value="medium">Mittel</option>
                    <option value="high">Hoch</option>
                  </select>
                </div>
                <Button type="submit" disabled={loading} className="glow-hover">
                  {loading ? 'Erstellen...' : 'Ticket erstellen'}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Ihre Tickets</CardTitle>
            <CardDescription>Übersicht über alle Ihre Support-Tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titel</TableHead>
                  <TableHead>Priorität</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Erstellt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.title}</TableCell>
                    <TableCell className={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </TableCell>
                    <TableCell className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </TableCell>
                    <TableCell>
                      {new Date(ticket.created_at).toLocaleDateString('de-DE')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {tickets.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Keine Tickets vorhanden
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tickets;
