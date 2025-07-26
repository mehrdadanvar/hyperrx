let config = useRuntimeConfig();
console.log(config);
export default defineEventHandler((event) => {
  return { data: "Hello World" };
});
