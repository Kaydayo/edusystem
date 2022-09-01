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
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        ),
        app.use(
            '/users/me',
            createProxyMiddleware( {
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        ),
        app.use(
            'user/signup',
            createProxyMiddleware( {
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        ),
        app.use(
            'user/getUserDetails',
            createProxyMiddleware( {
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        ),
        app.use(
            '/employee/invite',
            createProxyMiddleware( {
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        ),
        app.use(
            '/google-authentication',
            createProxyMiddleware( {
                target: 'https://api.onculture.io',
                changeOrigin: true
            })
        )

        
}