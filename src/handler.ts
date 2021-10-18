import { default_count_key, default_svg_template } from './constant';
import { renderToString } from './util';

export async function handleRequest(request: Request): Promise<Response> {
    const u = new URL(request.url);

    const svg_template =
        u.searchParams.get('svg_template') ?? default_svg_template;
    const count_key = u.searchParams.get('count_key') ?? default_count_key;

    const oldCount = +((await VISIT_COUNTER.get(count_key)) ?? '0') ?? 0;
    const newCount = oldCount + 1;
    await VISIT_COUNTER.put(count_key, newCount.toString());
    console.log({ count_key, oldCount, newCount });
    let str = '';
    let status = 200;
    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        /** <<-github disable cache */
        Expires: '0',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        /** github disable cache->> */
    });
    try {
        str = await renderToString(newCount, svg_template);
        str = str.replace('\x20data-server-rendered="true"', '');
        status = 200;
        headers.set('Content-Type', 'image/svg+xml');
    } catch (e) {
        let message = '';
        let stack: string | undefined = undefined;
        if (e instanceof Error) {
            message = e.message;
            stack = e.stack;
        } else {
            message = String(e);
        }
        str = JSON.stringify({ message, stack }, undefined, 2);
        status = 400;
    }
    return new Response(str, {
        status,
        headers,
    });
}
