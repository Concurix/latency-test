module.exports = function setup(app){
  app.get('/', function(req, res){
    res.send('Hello World')
  })
  app.get('/:delay', function(req, res){
    setTimeout(function finish(){
      res.json({delay: req.params.delay, status: 'ok'})
    },
    req.params.delay)
  })
}
