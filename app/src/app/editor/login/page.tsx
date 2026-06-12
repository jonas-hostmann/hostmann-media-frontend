'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Lock, Loader2 } from 'lucide-react';
import Button from '@/components/Button';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/editor/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const redirect = searchParams.get('redirect') || '/editor';
        router.push(redirect);
      } else {
        const data = await res.json();
        setError(data.error || 'Falsches Passwort');
      }
    } catch {
      setError('Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
          <Lock className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
          Editor Login
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Geben Sie Ihr Passwort ein, um die Website zu bearbeiten
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-3 text-sm text-center">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Passwort
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Button type="submit" variant="primary" fullWidth disabled={loading}>
                {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Anmelden'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function EditorLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
