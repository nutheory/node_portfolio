var express = require('express'),
    app = express()

app.set('port', (process.env.PORT || 5005))
app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/bower_components'))

app.get('/', function(request, response) {
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
