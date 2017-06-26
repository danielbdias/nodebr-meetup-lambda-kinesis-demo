const AWS = require('aws-sdk')

const state = {
  kinesis: null
}

function init (awsSettings) {
  this.kinesis = new AWS.Kinesis(awsSettings)
}

function putRecord (streamName, data, partitionKey) {
  const record = {
    StreamName: streamName,
    Data: data,
    PartitionKey: partitionKey
  }

  return new Promise((resolve, reject) => {
    this.kinesis.putRecord(record, (err, result) => {
      if (err) return reject(err)
      return resolve(result)
    })
  })
}

module.exports = {
  init: init.bind(state),
  putRecord: putRecord.bind(state)
}
