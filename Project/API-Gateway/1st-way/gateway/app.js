const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000

// http://localhost:3000/api/chat-service
app.use(
  '/api/chat-service',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { // not mandatory
        '/chat-service': ''
    }
  }),
);

// http://localhost:3000/api/feed-service
app.use(
  '/api/feed-service',
  createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
  }),
);

app.get('/', (req, res)=>{
    res.send('Hello from API Gateway')
})

app.listen(PORT, ()=>{
    console.log(`API Gateway server running on PORT ${PORT}`)
})