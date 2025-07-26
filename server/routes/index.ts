let config = useRuntimeConfig();
console.log(config);
export default defineEventHandler((event) => {
  return {
    data: "Welcome to HyperRx API. We are under construction! Currently there is only one route available at hyperrx.hyperneurox.com/api/tm which returns a list of all the prescription drugs in our database.",
  };
});
