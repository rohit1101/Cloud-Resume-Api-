import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocument.from(new DynamoDB());

export const handler = async (event) => {
  let body;
  let statusCode = "200";
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    body = await dynamo.scan({
      TableName: "Resume",
      key: {
        body: "sample-resume",
      },
    });
  } catch (err) {
    statusCode = "400";
    body = err.message;
  } finally {
    let res = { resume: body?.Items[0]?.resume };
    body = JSON.stringify(res, null, 2);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
