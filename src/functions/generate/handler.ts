import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import generate from "./generate";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const choices = await generate("horse");
  return formatJSONResponse({
    message: choices,
    event,
  });
};

export const main = middyfy(handler);
