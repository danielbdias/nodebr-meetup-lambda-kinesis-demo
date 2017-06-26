// Based in Scup's kinesis-generator at kinesis-interface-demo
// at https://github.com/scup/kinesis-interface-demo/blob/master/kinesis-generator

const AWS = require('aws-sdk')

const settings = {
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  kinesis: {
    streamName: process.env.STREAM_NAME
  },
  poolingTime: process.env.POOLING_TIME,
  messagesPerBatch: process.env.MESSAGES_PER_BATCH
}

console.log('Producer config:' + JSON.stringify(settings));

const kinesis = new AWS.Kinesis({
  region: settings.aws.region,
  accessKeyId: settings.aws.accessKeyId,
  secretAccessKey: settings.aws.secretAccessKey
})

const POOLING_TIME = settings.poolingTime
const MESSAGES_PER_BATCH = settings.messagesPerBatch

function sendMessage() {
  const data = {
    StreamName: settings.kinesis.streamName,
    Records: []
  }

  for (const i = 0; i < MESSAGES_PER_BATCH; i++) {
    data.Records.push({
      Data: 'Producer: sample data ' + new Date().getTime() + '_' + i,
      PartitionKey: 'demo-producer'
    })
  }

  kinesis.putRecords(data, function (err, result) {
    if (err) {
      console.error('Error: ' + JSON.stringify(err))
      return
    }

    console.log('Producer: messages sent to kinesis')
  })

  setTimeout(sendMessage, POOLING_TIME)
}

sendMessage()
