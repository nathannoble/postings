const TableName = "Items";

const getDynamoDBClient = () => {
    const AWS = require("aws-sdk");
  
    const options = {
      convertEmptyValues: true,
      region: "us-east-1"
    };
  
    const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
      ? new AWS.DynamoDB.DocumentClient({
          ...options,
          endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
        })
      : new AWS.DynamoDB.DocumentClient(options);
  
    return client;
  };

  module.exports = {
    read: async () => {
      const { Items } = await getDynamoDBClient()
        .scan({
          TableName
        })
        .promise();
  
      return Items;
    },
    get: async itemId => {
      const { Items } = await getDynamoDBClient()
        .scan({
          TableName
        })
        .promise();
  
      const item = Items.find(item => item.itemId == itemId);
  
      return item;
    },
    create: async itemDescription => {
      await getDynamoDBClient()
        .put({
          TableName,
          Item: {
            itemId: Date.now(),
            itemDescription
          }
        })
        .promise();
    }
  };