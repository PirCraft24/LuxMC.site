
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "Fehler beim Anmelden",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erfolgreich angemeldet!",
          description: "Willkommen zurück bei LuxMC",
        });
        navigate('/');
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
          <CardTitle className="text-2xl glow-text">Anmelden</CardTitle>
          <CardDescription>
            Melden Sie sich bei Ihrem LuxMC Konto an
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button 
              type="submit" 
              className="w-full glow-hover" 
              disabled={loading}
            >
              {loading ? 'Anmelden...' : 'Anmelden'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Noch kein Konto?{' '}
              <Link to="/signup" className="text-white hover:underline">
                Hier registrieren
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
