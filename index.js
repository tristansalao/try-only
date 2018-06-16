const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const history = require('connect-history-api-fallback')
var serveStatic = require('serve-static')

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))


express()
  
  .use(staticFileMiddleware)
  .use(history({
    disableDotRule: true,
    verbose: true
  }))
  .use(staticFileMiddleware)
  .get('/test2', (req, res) => res.send('hello'))


  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'src')))
  //.use(express.static(path.join(__dirname, '/dist/')))
  .use(serveStatic(path.join(__dirname, 'dist')))
  .set('views', path.join(__dirname, 'views'))

 // .get('/test', (req, res) =>  res.render(path.join(__dirname + '/dist/index.html'))) // not working after adding vue
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
