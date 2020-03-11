var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
});

var dynamodb = new AWS.DynamoDB();
var params = {
    TableName: "Items",
    KeySchema: [
      { AttributeName: "itemId", KeyType: "HASH" } // Partition key
    ],
    AttributeDefinitions: [{ AttributeName: "itemId", AttributeType: "N" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    }
  };


  dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});


