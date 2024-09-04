export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.route === "/landingpage") {
    return abortNavigation(
      createError({
        status: 404,
        message: "Can't log in without username and password",
      })
    );
  }
});
