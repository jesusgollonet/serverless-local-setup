# Serverless Local Setup

This is a learning playground to find a nice local setup for working with serverless functions. 

The task I'm aiming to complete is implementing the [ AWS Parameters and Secrets Lambda Extension ](https://aws.amazon.com/blogs/compute/using-the-aws-parameter-and-secrets-lambda-extension-to-cache-parameters-and-secrets/) in a way that it can be used   locally. The fact that it uses a Lambda layer and relies on a remote service that I can't emulate locally are specific challenges that I want to tackle. 

These are a few of the non exclusive solutions for local serverless development:

- serverless offline
- sls invoke local
- separating business logic from handlers
- TDD 


## Workflow 

  Initial list

  1. think of a feature
  2. quick diagram (overkill for single function features) 
  3. create function scaffold
  4. create test
  5. implement function

  Though this way of working makes me want to do a schematic upfront

## How to run

So far we can do 2 things

1. run tests

``
yarn test 
```

2. invoke local function with a json mock

```
npx sls invoke local -f hello --path src/functions/hello/mock.json
```




