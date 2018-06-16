const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const history = require('connect-history-api-fallback')


const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))


express()
  .use(staticFileMiddleware)
  .use(history({
    disableDotRule: true,
    verbose: true
  }))
  .use(staticFileMiddleware)
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'src')))
  .use(express.static(path.join(__dirname, '/dist/')))
  .set('views', path.join(__dirname, 'views'))
  .get('/', (req, res) => res.send('hello'))
  .get('/test', (req, res) =>  res.render(path.join(__dirname + '/dist/index.html')))
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
