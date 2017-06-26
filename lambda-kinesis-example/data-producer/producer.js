// Based in Scup's kinesis-generator at kinesis-interface-demo
// at https://github.com/scup/kinesis-interface-demo/blob/master/kinesis-generator

const KinesisClient = require('./kinesis')

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

function sendMessage () {
  const poolingTime = settings.poolingTime
  const messagesPerBatch = settings.messagesPerBatch

  const streamName = settings.kinesis.streamName
  const partitionKey = 'demo-producer'
  const promises = []

  for (let i = 0; i < messagesPerBatch; i++) {
    const data = {
      description: 'Producer: sample data #' + i,
      code: i
    }

    const dataAsString = JSON.stringify(data)

    promises.push(
      KinesisClient.putRecord(streamName, dataAsString, partitionKey)
    )
  }

  return Promise.all(promises)
    .catch(err => {
      console.error('Error: ' + JSON.stringify(err))
    })
    .then(() => {
      console.log('Producer: messages sent to kinesis')
      setTimeout(sendMessage, poolingTime)
    })
}

console.log('Producer config:' + JSON.stringify(settings))

KinesisClient.init(settings.aws)
sendMessage()
