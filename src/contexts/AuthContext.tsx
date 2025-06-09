
import React, { createContext, useContext, useEffect, useState } from 'react';

// Check if Supabase environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const hasSupabaseConfig = supabaseUrl && supabaseAnonKey;

// Only import and create Supabase client if config is available
let supabase: any = null;
if (hasSupabaseConfig) {
  const { createClient } = await import('@supabase/supabase-js');
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

interface User {
  id: string;
  email: string;
  user_metadata?: {
    username?: string;
    is_admin?: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, username: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      // Real Supabase authentication
      supabase.auth.getSession().then(({ data: { session } }: any) => {
        setUser(session?.user as User || null);
        setLoading(false);
      });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
        setUser(session?.user as User || null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      // Demo mode - check localStorage for demo user
      const demoUser = localStorage.getItem('demoUser');
      if (demoUser) {
        setUser(JSON.parse(demoUser));
      }
      setLoading(false);
    }
  }, []);

  const signUp = async (email: string, password: string, username: string) => {
    if (hasSupabaseConfig && supabase) {
      // Real Supabase signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            is_admin: false,
          },
        },
      });
      return { data, error };
    } else {
      // Demo signup
      const demoUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          username,
          is_admin: email === 'admin@luxmc.de'
        }
      };
      localStorage.setItem('demoUser', JSON.stringify(demoUser));
      setUser(demoUser);
      return { data: { user: demoUser }, error: null };
    }
  };

  const signIn = async (email: string, password: string) => {
    if (hasSupabaseConfig && supabase) {
      // Real Supabase signin
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { data, error };
    } else {
      // Demo signin - accept any password for demo purposes
      const demoUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          username: email.split('@')[0],
          is_admin: email === 'admin@luxmc.de'
        }
      };
      localStorage.setItem('demoUser', JSON.stringify(demoUser));
      setUser(demoUser);
      return { data: { user: demoUser }, error: null };
    }
  };

  const signOut = async () => {
    if (hasSupabaseConfig && supabase) {
      // Real Supabase signout
      await supabase.auth.signOut();
    } else {
      // Demo signout
      localStorage.removeItem('demoUser');
      setUser(null);
    }
  };

  const isAdmin = user?.user_metadata?.is_admin || false;

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { supabase };
