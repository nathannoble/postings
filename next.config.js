module.exports = {
    env: {
      BUNDLE_AWS_SDK: 1,
      LOCAL_DYNAMO_DB_ENDPOINT: "https://dynamodb.us-east-1.amazonaws.com"
      // LOCAL_DYNAMO_DB_ENDPOINT: "http://localhost:8000"
    },
    target: "serverless",
    webpack: config => {
      if (!process.env.BUNDLE_AWS_SDK) {
        config.externals = config.externals || [];
        config.externals.push({ 'aws-sdk': 'aws-sdk' })
      }
  
      return config;
    }
  };