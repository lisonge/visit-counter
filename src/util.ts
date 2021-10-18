import { HTMLElement, parse } from 'node-html-parser';
import Vue from 'vue';
import _renderToString from 'vue-server-renderer/basic';

export async function renderToString(count: number, template: string) {
    const oldNode = parse(template);
    const styleNodeList = oldNode.querySelectorAll('style');
    const backupStyleList = styleNodeList.map((style) => {
        const h = new HTMLElement('style', {}, '', null);
        h.innerHTML = style.innerHTML;
        h.setAttributes(style.attributes);
        return h;
    });
    styleNodeList.forEach((style) => {
        style.remove();
    });

    const app = new Vue({
        data: {
            count,
        },
        template: oldNode.toString(),
    });
    const newTemplate = await new Promise<string>((res, rej) => {
        _renderToString(app, {}, (error, result) => {
            if (error) {
                rej(error);
            } else {
                res(result!);
            }
        });
    });
    const newNode = parse(newTemplate);
    const styleSetG = new HTMLElement('g', {}, '', null);
    backupStyleList.forEach((style) => {
        styleSetG.appendChild(style);
    });
    newNode.querySelector('*')?.appendChild(styleSetG);
    return newNode.toString();
}
