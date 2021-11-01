# visit-counter

基于 cloudflare workers 和 vue ssr 的网络访问计数器

![visit-counter](https://visit-counter.lisonge.workers.dev/?count_key=github.com%2Flisonge%2Fvisit-counter&svg_template=%3Csvg%0A++++++xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A++++++%3Awidth%3D%2213+*+%28count+%2B+1+%2B+%27%27%29.length+%2B+5%22%0A++++++height%3D%2216%22%0A++++%3E%0A++++++%3Cg%3E%0A++++++++%3Ctext%0A++++++++++v-for%3D%22n+in+%28count+%2B+%27%27%29.length%22%0A++++++++++%3Akey%3D%22n%22%0A++++++++++style%3D%22font-size%3A+13px%22%0A++++++++++%3Ax%3D%22%0A++++++++++++%28n+-+1%29+*+13+%2B%0A++++++++++++%28%28count+%2B+%27%27%29.length+%3C+%28count+%2B+1+%2B+%27%27%29.length+%3F+13+%3A+0%29+%2B%0A++++++++++++5%0A++++++++++%22%0A++++++++++y%3D%2213%22%0A++++++++%3E%0A++++++++++%7B%7B+%28count+%2B+%22%22%29%5Bn+-+1%5D+%7D%7D%0A++++++++++%3Canimate%0A++++++++++++attributeName%3D%22y%22%0A++++++++++++from%3D%2213%22%0A++++++++++++to%3D%22-4%22%0A++++++++++++%3Abegin%3D%22%28%28count+%2B+%27%27%29.length+-+n%29+*+300+%2B+400+%2B+%27ms%27%22%0A++++++++++++dur%3D%22700ms%22%0A++++++++++++fill%3D%22freeze%22%0A++++++++++++v-if%3D%22%28count+%2B+%27%27%29%5Bn+-+1%5D+%21%3D+%28count+%2B+1+%2B+%27%27%29%5Bn+-+1%5D%22%0A++++++++++%2F%3E%0A++++++++%3C%2Ftext%3E%0A++++++++%3Ctext%0A++++++++++v-for%3D%22n+in+%28count+%2B+1+%2B+%27%27%29.length%22%0A++++++++++%3Akey%3D%22n%22%0A++++++++++style%3D%22font-size%3A+13px%22%0A++++++++++%3Ax%3D%22%28n+-+1%29+*+13+%2B+5%22%0A++++++++++y%3D%2230%22%0A++++++++%3E%0A++++++++++%7B%7B+%28count+%2B+1+%2B+%22%22%29%5Bn+-+1%5D+%7D%7D%0A++++++++++%3Canimate%0A++++++++++++attributeName%3D%22y%22%0A++++++++++++from%3D%2230%22%0A++++++++++++to%3D%2213%22%0A++++++++++++%3Abegin%3D%22%28%28count+%2B+%27%27%29.length+-+n%29+*+300+%2B+500+%2B+%27ms%27%22%0A++++++++++++dur%3D%22700ms%22%0A++++++++++++fill%3D%22freeze%22%0A++++++++++++v-if%3D%22%28count+%2B+%27%27%29%5Bn+-+1%5D+%21%3D+%28count+%2B+1+%2B+%27%27%29%5Bn+-+1%5D%22%0A++++++++++%2F%3E%0A++++++++%3C%2Ftext%3E%0A++++++%3C%2Fg%3E%0A++++%3C%2Fsvg%3E)

## 使用

### 构建

```shell
pnpm install
pnpm run build
```

### 上传

需要在 `wrangler.toml` 中 切换自己的 `kv_namespaces_id`

```shell
npx wrangler login # 可选的, 未登录需要提前登录
pnpm run publish
```

### 访问

可在请求的 URL 的 query 传入两个参数

- `count_key` 需要计数的 key

- `svg_template` 渲染的 svg 模板, 使用 vue 的 ssr 渲染, 支持 vue 语法, 模板中变量名为 **count**

## 示例

当前访问次数![visit-counter](https://visit-counter.lisonge.workers.dev/?count_key=github.com%2Flisonge%2Fvisit-counter&svg_template=%3Csvg%0A++++++xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A++++++%3Awidth%3D%2213+*+%28count+%2B+1+%2B+%27%27%29.length+%2B+5%22%0A++++++height%3D%2216%22%0A++++%3E%0A++++++%3Cg%3E%0A++++++++%3Ctext%0A++++++++++v-for%3D%22n+in+%28count+%2B+%27%27%29.length%22%0A++++++++++%3Akey%3D%22n%22%0A++++++++++style%3D%22font-size%3A+13px%22%0A++++++++++%3Ax%3D%22%0A++++++++++++%28n+-+1%29+*+13+%2B%0A++++++++++++%28%28count+%2B+%27%27%29.length+%3C+%28count+%2B+1+%2B+%27%27%29.length+%3F+13+%3A+0%29+%2B%0A++++++++++++5%0A++++++++++%22%0A++++++++++y%3D%2213%22%0A++++++++%3E%0A++++++++++%7B%7B+%28count+%2B+%22%22%29%5Bn+-+1%5D+%7D%7D%0A++++++++++%3Canimate%0A++++++++++++attributeName%3D%22y%22%0A++++++++++++from%3D%2213%22%0A++++++++++++to%3D%22-4%22%0A++++++++++++%3Abegin%3D%22%28%28count+%2B+%27%27%29.length+-+n%29+*+300+%2B+400+%2B+%27ms%27%22%0A++++++++++++dur%3D%22700ms%22%0A++++++++++++fill%3D%22freeze%22%0A++++++++++++v-if%3D%22%28count+%2B+%27%27%29%5Bn+-+1%5D+%21%3D+%28count+%2B+1+%2B+%27%27%29%5Bn+-+1%5D%22%0A++++++++++%2F%3E%0A++++++++%3C%2Ftext%3E%0A++++++++%3Ctext%0A++++++++++v-for%3D%22n+in+%28count+%2B+1+%2B+%27%27%29.length%22%0A++++++++++%3Akey%3D%22n%22%0A++++++++++style%3D%22font-size%3A+13px%22%0A++++++++++%3Ax%3D%22%28n+-+1%29+*+13+%2B+5%22%0A++++++++++y%3D%2230%22%0A++++++++%3E%0A++++++++++%7B%7B+%28count+%2B+1+%2B+%22%22%29%5Bn+-+1%5D+%7D%7D%0A++++++++++%3Canimate%0A++++++++++++attributeName%3D%22y%22%0A++++++++++++from%3D%2230%22%0A++++++++++++to%3D%2213%22%0A++++++++++++%3Abegin%3D%22%28%28count+%2B+%27%27%29.length+-+n%29+*+300+%2B+500+%2B+%27ms%27%22%0A++++++++++++dur%3D%22700ms%22%0A++++++++++++fill%3D%22freeze%22%0A++++++++++++v-if%3D%22%28count+%2B+%27%27%29%5Bn+-+1%5D+%21%3D+%28count+%2B+1+%2B+%27%27%29%5Bn+-+1%5D%22%0A++++++++++%2F%3E%0A++++++++%3C%2Ftext%3E%0A++++++%3C%2Fg%3E%0A++++%3C%2Fsvg%3E)

### 将会改进

多数人都是比较懒的，使用默认模板即可

所以后期将添加 多个模板 和 新字段 直接选择模板
