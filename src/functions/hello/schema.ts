export default {
  type: "object",
  properties: {
    animal: { type: "string" },
  },
  required: ["animal"],
} as const;
