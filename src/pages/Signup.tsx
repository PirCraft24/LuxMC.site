
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwörter stimmen nicht überein",
        description: "Bitte überprüfen Sie Ihre Passwort-Eingabe",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Passwort zu kurz",
        description: "Das Passwort muss mindestens 6 Zeichen lang sein",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(email, password, username);
      if (error) {
        toast({
          title: "Fehler bei der Registrierung",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Registrierung erfolgreich!",
          description: "Bitte überprüfen Sie Ihre E-Mail zur Bestätigung",
        });
        navigate('/login');
      }
    } catch (error) {
      toast({
        title: "Unerwarteter Fehler",
        description: "Bitte versuchen Sie es erneut",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <Card className="w-full max-w-md glass-panel">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl glow-text">Registrieren</CardTitle>
          <CardDescription>
            Erstellen Sie Ihr LuxMC Konto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Benutzername</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-black/20 border-white/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/20 border-white/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black/20 border-white/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-black/20 border-white/20"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full glow-hover" 
              disabled={loading}
            >
              {loading ? 'Registrieren...' : 'Registrieren'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Bereits ein Konto?{' '}
              <Link to="/login" className="text-white hover:underline">
                Hier anmelden
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
