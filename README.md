# Cloud Resume Api ☁️

This repo contains my solution for [cloud resume api](https://cloudresumeapi.dev) challenge using AWS Cloud and Google Cloud Platform.

## 🥇 AWS Cloud Solution

### Technologies/Services 🚀

- Web server: Node.js
- Serverless Service: AWS Lambda
- Database: AWS Dynamo DB
- Nodejs version: v20.14.0 LTS
- CI: Github Actions
___

### Architecture and steps to complete the task

<img width="800" alt="image" src="https://github.com/rohit1101/Cloud-Resume-Api-/assets/37110560/d727e75b-4a0f-4def-a909-e9d500833643">


- The way I implemented the solution for this challenge is by setting up an HTTP API using API Gateway which will trigger the Lambda function to get the data from Dynamo DB.
- We have to create an IAM Lambda execution role and attach it to the lambda function which allows our function runtime to interact with Dynamo DB to the get the data.
- Users can access the API Gateway endpoint(https) deployment link which will trigger the lambda function to get the resume data from dynamoDB
- Use this [schema](https://jsonresume.org/schema) for customising your resume.
- Resume api endpoint: [get-my-resume](https://6gbptkzmz3.execute-api.us-east-1.amazonaws.com/resume)


### Documentation links to lookout 👀 

- [dynamodb node js api](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-lib-dynamodb/)
- [DynamoDB-101](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html)

---

## 🥇 GCP Solution

🚧 Work in progress... 
