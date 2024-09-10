export default defineNuxtRouteMiddleware((to, from) => {
  const sharedState = inject("sharedState");
  if (to.params.route === "/landingpage" && !sharedState.userName) {
    return abortNavigation(
      createError({
        message: "Log in to view this page.",
      })
    );
  }
});
