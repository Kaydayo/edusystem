const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/users/login',
        createProxyMiddleware( {
            target: 'http://159.223.174.163',
            changeOrigin: true
        })
    ),
        app.use(
            '/company/create-account',
            createProxyMiddleware( {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            '/users/me',
            createProxyMiddleware( {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            'user/signup',
            createProxyMiddleware( {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            'user/getUserDetails',
            createProxyMiddleware( {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            '/employee/invite',
            createProxyMiddleware( {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        )

        
}