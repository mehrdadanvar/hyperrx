//https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2025-07-25",
  srcDir: "server",
  runtimeConfig: {
    mongoString: process.env.MONGO_URI,
  },
});
