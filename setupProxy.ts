import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = app => {
    app.use(
        createProxyMiddleware('/users/login', {
            target: 'http://159.223.174.163',
            changeOrigin: true
        })
    ),
        app.use(
            createProxyMiddleware('/company/create-account', {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            createProxyMiddleware('/users/me', {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            createProxyMiddleware('user/signup', {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            createProxyMiddleware('user/getUserDetails', {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        ),
        app.use(
            createProxyMiddleware('/employee/invite', {
                target: 'http://159.223.174.163',
                changeOrigin: true
            })
        )

        
}