function processItem (item) {
  // now we need to recover the data properly as a text
  const rawData = new Buffer(item.kinesis.data, 'base64').toString('ascii')

  // and then, parse it
  const data = JSON.parse(rawData)

  // after that you can process the data
  if (data.code % 10 === 0) {
    console.log('This item needs action: ', data)
  }
}

module.exports.handler = function LambdaFunction (event, context, callback) {
  try {
    // Here we got a batch of Kinesis items
    const kinesisRecords = event.Records

    kinesisRecords.map(processItem)

    return callback(null, 'Everything is ok !')
  } catch (error) {
    const errorMessage = 'Houston, we have a problem... Problem: ' + error
    return callback(errorMessage)
  }
}
