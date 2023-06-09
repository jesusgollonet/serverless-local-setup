import type { AWS } from "@serverless/typescript";

import hello from "@functions/hello";
import generate from "@functions/generate";

const serverlessConfiguration: AWS = {
  service: "jgb-openai-test",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-better-credentials"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-1",
    stage: '${opt:stage, "dev"}',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      OPENAI_API_KEY: "${ssm(${aws:region}):/sls-local-test/openai/api_key}",
    },
  },
  // import the function via paths
  functions: { hello, generate },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
