import { Function } from 'eval5';
import { handleRequest } from './handler';

// see https://developers.cloudflare.com/workers/runtime-apis/web-standards#javascript-standards
// vue-server-renderer use [new Function]
// @ts-ignore
globalThis.Function = Function;

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});
