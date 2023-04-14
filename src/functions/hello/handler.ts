import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import hello from "./hello";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: hello(event.body.name),
    event,
  });
};

export const main = middyfy(handler);
