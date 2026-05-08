import { Plugin } from "vite"

/**
 * A list of ports usually blocked by browsers (e.g. Chrome, Firefox).
 * Reference: https://fetch.spec.whatwg.org/#port-blocking
 */
const RESTRICTED_PORTS = new Set([
  1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 77, 79, 87, 95, 101, 102, 103,
  104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389, 465, 512, 513, 514, 515,
  526, 530, 531, 532, 540, 556, 563, 587, 601, 636, 993, 995, 2049, 3659, 4045, 6000, 6665, 6666,
  6667, 6668, 6669,
])

function checkRestrictedPortPlugin(): Plugin {
  return {
    name: "vite-plugin-port-checker",
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        const address = server.httpServer?.address()

        if (address && typeof address !== "string") {
          const port = address.port

          if (RESTRICTED_PORTS.has(port)) {
            // Using British English for the console warning messages
            console.warn(
              `\x1b[33m%s\x1b[0m`, // Yellow colour output
              `\n[Warning] The current listening port ${port} is categorised as a restricted port by most browsers.`
            )
            console.warn(
              `This may prevent you from accessing the application. Please consider changing the port in your 'vite.config.ts' or 'vite.config.js' via 'server.port'.\n`
            )
          }
        }
      })
    },
  }
}

export default checkRestrictedPortPlugin
