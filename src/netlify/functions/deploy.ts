import type { Config } from "@netlify/functions";

const BUILD_HOOK = `https://api.netlify.com/build_hooks/627c1b86a6497b0066134fd6`;

export default async (req: Request) => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  });
};

export const config: Config = {
  schedule: "0 0 * * *",
};
