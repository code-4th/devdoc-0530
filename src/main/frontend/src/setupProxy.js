const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        // React 개발 서버가 /api로 시작하는 요청을 http://localhost:8080으로 프록시
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
            changeOrigin: true,
        })
    );
};