import { Render } from '@measured/puck';
import '@measured/puck/puck.css';
import { puckConfig } from '@/lib/puck-config';
import { getPuckPageData } from '@/lib/puck-api';

interface PuckPageRendererProps {
  path: string;
  fallback: React.ReactNode;
}

export default async function PuckPageRenderer({ path, fallback }: PuckPageRendererProps) {
  const puckData = await getPuckPageData(path);

  if (!puckData) {
    return <>{fallback}</>;
  }

  return <Render config={puckConfig} data={puckData} />;
}
