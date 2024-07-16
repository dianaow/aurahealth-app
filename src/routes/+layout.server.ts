import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function ({ locals }) {
   return {
      // locals.user is set in hooks.server.js
      user: locals.user,
   }
}