
import React, { useState, useEffect } from 'react';
import { useAuth, supabase } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  user_email: string;
  username: string;
}

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      toast({
        title: "Fehler beim Laden der Tickets",
        description: "Bitte versuchen Sie es erneut",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateTicketStatus = async (ticketId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('tickets')
        .update({ status })
        .eq('id', ticketId);

      if (error) throw error;

      toast({
        title: "Ticket aktualisiert",
        description: `Status wurde zu "${status}" geändert`,
      });

      fetchTickets();
    } catch (error) {
      console.error('Error updating ticket:', error);
      toast({
        title: "Fehler beim Aktualisieren",
        description: "Bitte versuchen Sie es erneut",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-red-500">Zugriff verweigert</CardTitle>
            <CardDescription>Sie haben keine Berechtigung für diesen Bereich.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold glow-text mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Willkommen, {user.user_metadata?.username}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-red-500">Offene Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {tickets.filter(t => t.status === 'open').length}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-yellow-500">In Bearbeitung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {tickets.filter(t => t.status === 'in_progress').length}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-green-500">Geschlossen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {tickets.filter(t => t.status === 'closed').length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle>Alle Tickets</CardTitle>
            <CardDescription>Verwalten Sie alle Support-Tickets</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Laden...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titel</TableHead>
                    <TableHead>Benutzer</TableHead>
                    <TableHead>Priorität</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Erstellt</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.title}</TableCell>
                      <TableCell>{ticket.username}</TableCell>
                      <TableCell className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </TableCell>
                      <TableCell className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </TableCell>
                      <TableCell>
                        {new Date(ticket.created_at).toLocaleDateString('de-DE')}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {ticket.status !== 'in_progress' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateTicketStatus(ticket.id, 'in_progress')}
                            >
                              In Bearbeitung
                            </Button>
                          )}
                          {ticket.status !== 'closed' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateTicketStatus(ticket.id, 'closed')}
                            >
                              Schließen
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
