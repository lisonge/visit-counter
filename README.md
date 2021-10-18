# visit-counter

基于 cloudflare workers 和 vue ssr 的网络访问计数器

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

![visit-counter](https://visit-counter.lisonge.workers.dev/?count_key=github.com/lisonge/visit-counter)
