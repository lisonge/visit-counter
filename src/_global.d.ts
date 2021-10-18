/** 计数器 KV */
declare const VISIT_COUNTER: KVNamespace;
/** pure js runtime */
declare module 'vue-server-renderer/basic' {
    type Done = {
        (error: null, result: string): void;
        (error: Error, result: undefined): void;
    };
    /**
     * pure js runtime
     * @see <https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/basic.js#L8953>
     */
    export default function renderToString(
        vm: Vue,
        context: object | undefined | Function,
        done: Done
    ): Promise<string>;
}

// declare module 'node-html-parser/esm/index' {
//     export * from 'node-html-parser';
// }
