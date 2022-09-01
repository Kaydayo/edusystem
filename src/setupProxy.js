const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/users/login',
        createProxyMiddleware( {
            target: 'http://localhost:4000',
            changeOrigin: true
        })
    ),
        app.use(
            '/company/create-account',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        ),
        app.use(
            '/users/me',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        ),
        app.use(
            'user/signup',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        ),
        app.use(
            'user/getUserDetails',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        ),
        app.use(
            '/employee/invite',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        ),
        app.use(
            '/google-authentication',
            createProxyMiddleware( {
                target: 'http://localhost:4000',
                changeOrigin: true
            })
        )

        
}