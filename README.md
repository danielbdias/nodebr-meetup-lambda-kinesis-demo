# NodeBR 2017-06-23 Meetup Code Samples

Here is the sources used in the presentation: "Processando dados com Node.js, AWS Lambda e Kinesis" (Processing data with Node.js, AWS Lambda and Kinesis)

The prerequisites to execute this code is:
- Node.js 6.10.2
- yarn (to install the dependencies for every code)

The code is structured as follows:

## lambda-example

Simple code showing how a lambda function is structured.

It can be executed with the command:

````
yarn start
````

Which will return:

`````
➜  my-terminal> yarn start
yarn start v0.24.6
$ serverless invoke local --function lambda-example --path payload.json
Hello, I am a simple lambda function !
Here is my event data:  { data: 'some sort of data',
  anotherData: 'another sort of data' }
Here is my context:  { awsRequestId: 'id',
  invokeid: 'id',
  logGroupName: '/aws/lambda/lambda-example-dev-lambda-example',
  logStreamName: '2015/09/22/[HEAD]13370a84ca4ed8b77c427af260',
  functionVersion: 'HEAD',
  isDefaultFunctionVersion: true,
  functionName: 'lambda-example-dev-lambda-example',
  memoryLimitInMB: '1024',
  succeed: [Function: succeed],
  fail: [Function: fail],
  done: [Function: done],
  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis] }
"Everything is ok !"
✨  Done in 2.05s.
`````

## lambda-kinesis-example

First, you need to create a Kinesis Stream in your AWS Account which will be integrated with this example lambda.

After that, build the lambda data consumer executing the following commands:

````
cd ./lambda-data-consumer
yarn && yarn package
````

Finally, set up a Lambda in your AWS Account with a trigger to the recently created Kinesis and add the zip file `lambda-data-consumer.zip` created in `./lambda-kinesis-example/lambda-data-consumer/.serverless`.

To see the lambda processing the data, go to `./data-producer` folder, add your credentials in `./start.sh` and run from `data-producer` folder the following command:

````
sh start.sh
````

