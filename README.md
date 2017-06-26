# NodeBR 2017-06-23 Meetup Code Samples

Here is the sources used in the presentation: "Processando dados com Node.js, AWS Lambda e Kinesis" (Processing data with Node.js, AWS Lambda and Kinesis)

The prerequisites to execute this code is:
- yarn (to install the dependencies for every code)
- docker (to exec the lambda + kinesis examples)

The code is structured as follows:

## lambda-example

Simple code showing how a lambda function is structured.

It can be executed with the command:

````
yarn start
````

Which will return:

`````
➜  example-01 git:(master) ✗ yarn start
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
