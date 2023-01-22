/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

// next.environment.mjs
// export default {
//   webpack(config){
//     config.infrastructureLogging = {
//       level: "error",
//     }
//   }
// }

module.exports = nextConfig
