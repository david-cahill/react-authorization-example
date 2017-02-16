import Hapi from 'hapi'
import Inert from 'inert'
import Chairo from 'chairo'
import Hapi_Cookie from 'hapi-auth-cookie'
import Bell from 'bell'
import { resolve } from 'path'

export default (port) => {

    const server = new Hapi.Server()
    server.connection({ port })
    server.register([Hapi_Cookie, Bell, Chairo, Inert], (err) => {
    	if (err) throw err;
    	const seneca = server.seneca
        seneca.use('mongo-store', {
          name: 'single-page-app-authorization',
          host: '127.0.0.1',
          port: 27017
        })
        seneca.use('user')
        seneca.use('entity')
        seneca.use('auth', {
            redirect: { fail: '/' }
        })
        seneca.ready(() => {
        	server.route([{
    			method: 'GET',
    			path: '/{pageName*}',
    			handler: {
    				file: resolve(__dirname, '../../build/index.html')
    			}
        	}, {
        		method: 'GET',
        		path: '/static/{param*}',
        		handler: {
        			directory: {
        				path: resolve(__dirname, '../../build/static')
        			}
        		}
        	}, {
        		method: 'GET',
        		path: '/admin/{subroute*}',
        		handler: {
    				file: resolve(__dirname, '../../build/index.html')
    			},
    			config: { 
    				auth: 'session',
                    plugins: {
                        'hapi-auth-cookie': {
                            redirectTo: '/'
                        }
                    }
    			}
        	}])
        	seneca.act({role: 'user', cmd: 'register', name: "David", email: 'dc@gmail.com', password: 'test12345'})
        	server.start((err) => {
        		if (err) throw err
        		console.log('server running')
        	})
        })
    })
}
