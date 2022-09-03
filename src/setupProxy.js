const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/users/login',
        createProxyMiddleware( {
            target: process.env.REACT_APP_BACKEND,
            changeOrigin: true
        })
    ),
        app.use(
            'account/company',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        ),
        app.use(
            '/users/me',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        ),
        app.use(
            'user/signup',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        ),
        app.use(
            'user/getUserDetails',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        ),
        app.use(
            '/employee/invite',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        ),
        app.use(
            '/google-authentication',
            createProxyMiddleware( {
                target: process.env.REACT_APP_BACKEND,
                changeOrigin: true
            })
        )

        
}