# node-qiniu-server

The server for https://github.com/int64ago/getlink

## How to run

### Node
 - `npm i`
 - `AUTH_KEY=<AUTH_KEY> ACCESS_KEY=<ACCESS_KEY> SECRET_KEY=<SECRET_KEY> BUCKET=<BUCKET> DOMAIN=<DOMAIN> node src/app.js`

### Docker
```bash
docker run -d -e AUTH_KEY=<AUTH_KEY> \
-e ACCESS_KEY=<ACCESS_KEY> \
-e SECRET_KEY=<SECRET_KEY> \
-e BUCKET=<BUCKET> \
-e DOMAIN=<DOMAIN> \
-p 80:3000 \
int64ago/node-qiniu-server
```
