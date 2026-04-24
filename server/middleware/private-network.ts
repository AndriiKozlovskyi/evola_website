// Required for Chrome's Private Network Access policy.
// Storyblok runs on a public origin (app.storyblok.com) and needs to load
// localhost inside its visual editor iframe. Chrome blocks this unless the
// local server explicitly opts in via these headers.
export default defineEventHandler((event) => {
  setResponseHeader(event, 'Access-Control-Allow-Private-Network', 'true')
  setResponseHeader(event, 'Access-Control-Allow-Origin', '*')
  setResponseHeader(event, 'Access-Control-Allow-Methods', 'GET, OPTIONS')
  setResponseHeader(event, 'Access-Control-Allow-Headers', 'Content-Type')

  // Respond to OPTIONS preflight immediately
  if (event.node.req.method === 'OPTIONS') {
    setResponseStatus(event, 204)
    return null
  }
})
