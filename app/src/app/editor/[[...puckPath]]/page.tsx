'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Puck } from '@measured/puck';
import '@measured/puck/puck.css';
import { puckConfig } from '@/lib/puck-config';
import { Loader2 } from 'lucide-react';

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const puckPathArray = params?.puckPath as string[] | undefined;
  const path = '/' + (puckPathArray?.join('/') || '');

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`/api/puck?path=${encodeURIComponent(path)}`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
        } else {
          setData({ root: { props: {} }, content: [] });
        }
      } catch {
        setData({ root: { props: {} }, content: [] });
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [path]);

  const handlePublish = async (newData: any) => {
    try {
      const res = await fetch('/api/puck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, data: newData }),
      });
      
      if (!res.ok) {
        const error = await res.json();
        alert(`Fehler beim Speichern: ${error.error}`);
        return;
      }
      
      alert('Erfolgreich gespeichert!');
    } catch {
      alert('Ein Netzwerkfehler ist aufgetreten.');
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          <p className="text-slate-600 font-medium">Lade Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-primary-400">Hostmann Media Editor</span>
          <span className="text-slate-400 border-l border-slate-700 pl-4">Aktuelle Seite: <span className="text-white font-mono bg-slate-800 px-2 py-0.5 rounded">{path}</span></span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.open(path, '_blank')}
            className="text-slate-300 hover:text-white transition-colors"
          >
            Seite ansehen
          </button>
          <button 
            onClick={async () => {
              await fetch('/api/editor/auth', { method: 'DELETE' });
              router.push('/editor/login');
            }}
            className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
        />
      </div>
    </div>
  );
}
