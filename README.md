# Serverless Local Setup

This is a learning playground to find a nice local setup for working with serverless functions. 

The task I'm aiming to complete is implementing the [ AWS Parameters and Secrets Lambda Extension ](https://aws.amazon.com/blogs/compute/using-the-aws-parameter-and-secrets-lambda-extension-to-cache-parameters-and-secrets/) in a way that it can be used   locally. The fact that it uses a Lambda layer and relies on a remote service that I can't emulate locally are specific challenges that I want to tackle. 

These are a few of the non exclusive solutions for local serverless development:

- serverless offline
- sls invoke local
- separating business logic from handlers
- TDD 

