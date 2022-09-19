import render from 'preact-render-to-string';
import Counter from './components/Counter';
import { toSafeInteger } from './util';
import type { KvEnv } from './types';
import faviconText from './assets/favicon.svg?raw';

export default {
  async fetch(request: Request, { VISIT_COUNTER }: KvEnv): Promise<Response> {
    if (request.method == 'OPTIONS') {
      return new Response(null, {
        headers: {
          'access-control-allow-origin': '*',
        },
      });
    }
    const u = new URL(request.url);
    if (u.pathname == '/favicon.ico') {
      return new Response(faviconText, {
        headers: {
          'content-type': 'image/svg+xml',
        },
      });
    }
    const countKey = 'key:' + (u.searchParams.get('key') ?? 'default');
    const start = toSafeInteger(u.searchParams.get('start'));
    const rawValue = await VISIT_COUNTER.get(countKey);
    const oldCount = toSafeInteger(rawValue);
    const newCount = oldCount + 1;

    if (rawValue === null) {
      const clientSecret = u.searchParams.get('secret');
      const serverSecret = await VISIT_COUNTER.get('secret');
      if (serverSecret === null || serverSecret === clientSecret) {
        await VISIT_COUNTER.put(countKey, newCount.toString());
      }
    } else {
      await VISIT_COUNTER.put(countKey, newCount.toString());
    }
    if (u.searchParams.has('html')) {
      return new Response(
        render(
          <html>
            <head>
              <title>{'Example'}</title>
              <style>{`*{padding: 0;margin: 0;}`}</style>
            </head>
            <body
              style={{
                display: 'inline-block',
                'border-width': '1px',
                'border-color': '#000',
                'border-style': 'dashed',
                margin: '10px',
              }}
            >
              <Counter count={newCount + start} />
            </body>
          </html>,
          undefined,
          {
            pretty: true,
          }
        ),
        {
          headers: {
            'content-type': 'text/html',
          },
        }
      );
    }

    return new Response(
      render(<Counter count={newCount + start} />, undefined, {
        pretty: true,
      }),
      {
        headers: {
          'content-type': 'image/svg+xml',
          /** <<-github disable cache */
          Expires: '0',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          /** github disable cache->> */
        },
      }
    );
  },
};
