// Step 1: Create a Vue instance
import Vue from 'vue';
const app = new Vue({
    data: {
        count: 4399,
    },

    template: `<div>Hello World{{count}}
    <div>{{Math.floor(count/7)}}</div>
    </div>`,
});

// import { createRenderer } from 'vue-server-renderer';
// const renderer = createRenderer();

// @ts-ignore
import renderToString from 'vue-server-renderer/basic';
// renderer.renderToString
// renderer
//     .renderToString(app)
//     .then((html: string) => {
//         console.log(html);
//     })
//     .catch((err: Error) => {
//         console.log(err.message);
//     });

renderToString(app, {}, (...args: any[]) => {
    console.log(args);
});
