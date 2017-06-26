module.exports.handler = function LambdaFunction(event, context, callback) {
  try {
    console.log('Hello, I am a simple lambda function !')

    console.log('Here is my event data: ', event)
    console.log('Here is my context: ', context)

    return callback(null, 'Everything is ok !')
  } catch (error) {
    return callback('Houston, we have a problem... Problem: ' + error)
  }
}
