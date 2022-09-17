# visit-counter

基于 cloudflare workers 和 preact ssr 的网络访问计数器

![visit-counter](https://visit-counter.lisonge.workers.dev)

## 使用

### 命令说明

- vite:build 构建
- vite:build-watch 监听文件持续构建
- wrangler:dev 启动本地开发
- wrangler:publish 打包并上传部署

### 访问

可在请求的 URL 的 query 传入两个参数

- `key` 可选的, 需要计数的 key

- `start` 可选的, 起始计数

### 访问新 key

如果 KV 没有 secret 值, 可访问任意 key

如果 KV 有 secret 值, 需要在 query 设置 `secret=${secret}` 然后访问一次

## 示例

当前访问次数![visit-counter](https://visit-counter.lisonge.workers.dev)
