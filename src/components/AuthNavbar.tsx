
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const AuthNavbar = () => {
  const { user, signOut, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <>
          <span className="text-sm text-muted-foreground">
            Willkommen, {user.user_metadata?.username || user.email}
          </span>
          <Link to="/tickets">
            <Button variant="ghost" size="sm">
              Tickets
            </Button>
          </Link>
          {isAdmin && (
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="text-yellow-500">
                Admin
              </Button>
            </Link>
          )}
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Abmelden
          </Button>
        </>
      ) : (
        <>
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Anmelden
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" size="sm">
              Registrieren
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthNavbar;
