export AWS_REGION=us-east-1
export AWS_ACCESS_KEY_ID=my-personal-access-key
export AWS_SECRET_ACCESS_KEY=my-personal-secret-access-key
export STREAM_NAME=SampleKinesisStream
export POOLING_TIME=1000
export MESSAGES_PER_BATCH=50

cd ./data-producer

yarn start
