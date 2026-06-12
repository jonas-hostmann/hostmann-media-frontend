import type { Data } from '@measured/puck';

const WP_REST_URL = process.env.NEXT_PUBLIC_WP_URL 
  ? `${process.env.NEXT_PUBLIC_WP_URL}/wp-json` 
  : 'https://wp.hostmann-media.de/wp-json';

export const EMPTY_PUCK_DATA: Data = { root: { props: {} }, content: [] };

export async function getPuckPageData(path: string): Promise<Data | null> {
  try {
    const res = await fetch(
      `${WP_REST_URL}/hostmann/v1/puck-page?path=${encodeURIComponent(path)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    // Check if it has actual content
    if (!data || !data.content || data.content.length === 0) return null;
    return data as Data;
  } catch {
    return null;
  }
}

export async function savePuckPageData(path: string, data: Data): Promise<boolean> {
  try {
    const res = await fetch('/api/puck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, data }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
