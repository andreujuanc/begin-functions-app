let begin = require('@architect/functions')

// TODO change defaultJSON
let defaultJSON = {
  id: 12313123123,
  name: 'jc',
  date: Date.now(),
  someObject:{
    leName:'le object'
  }
}

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: defaultJSON
  })
}

exports.handler = begin.json.get(route)
