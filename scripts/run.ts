import * as util from "./_util.ts";

export async function run(file: string = Deno.args[0]) {
  await util.requires("deno");

  await util.run(
    `running`,
    ["deno", "run", "-Ar", "--unstable", file],
    {
      PLUGIN_URL: "./target/release",
      DEBUG: "true",
    },
  );
}

if (import.meta.main) {
  await run();
}
