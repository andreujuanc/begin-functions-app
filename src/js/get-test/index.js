let begin = require('@architect/functions')

function route (req, res) {
  let request = JSON.stringify( new Date(Date.now()).toString() )

  // TODO change defaultJS
  let defaultJS = `console.log('Le time ', ${request})`

  console.log('Hello backend! ', request)
  res({
    js: defaultJS
  })
}

exports.handler = begin.js.get(route)
