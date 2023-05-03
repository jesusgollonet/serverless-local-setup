# Serverless Local Setup

This is a learning playground to find a nice local setup for working with serverless functions. 

The task I'm aiming to complete is implementing the [ AWS Parameters and Secrets Lambda Extension ](https://aws.amazon.com/blogs/compute/using-the-aws-parameter-and-secrets-lambda-extension-to-cache-parameters-and-secrets/) in a way that it can be used   locally. The fact that it uses a Lambda layer and relies on a remote service that I can't emulate locally are specific challenges that I want to tackle. 

These are a few of the non exclusive solutions for local serverless development:

- serverless offline
- sls invoke local
- separating business logic from handlers
- TDD 

## How to use environment variables

We're currently using the serverless ssm integration. 

1. create the variable in [SSM Parameter Store](https://us-east-1.console.aws.amazon.com/systems-manager/parameters?region=us-east-1) (I've done it manually)

2. Add your variable to `serverless.ts`

```typescript
const serverlessConfiguration: AWS = {
    provider:{
        environment: {
            OPENAI_API_KEY: "${ssm(${aws:region})?/sls-local-test/openai/api_key}"
         }
     }
}
```

3. use it in your code

```javascript
const OPENAI_API_KEY=process.env.OPENAI_API_KEY
```

4. in order to use the variable within serverless invoke local you need to pass
   it as -e to your invokation

```bash
 npx sls invoke local -f generate -e OPENAI_API_KEY=$OPENAI_API_KEY --path
 src/functions/generate/mock.json
```



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




