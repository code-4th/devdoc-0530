const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        // React 개발 서버가 '/'로 시작하는 요청을 http://localhost:8080으로 프록시
        '/',
        createProxyMiddleware({
            target: 'http://localhost:8080',	// 서버 URL or localhost:설정한 포트 번호
            changeOrigin: true,
        })
    );
};