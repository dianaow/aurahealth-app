const load = async function({ locals }) {
  return {
    // locals.user is set in hooks.server.js
    user: locals.user
  };
};
export {
  load
};
