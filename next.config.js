// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       /* development only config options here */
//     }
//   }

//   return {
//     /* config options for all phases except development here */
//     distDir: 'build',

//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         // Unset client-side javascript that only works server-side
//         // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
//         config.node = { fs: 'empty', module: 'empty' }
//       }
//       return config
//     },
//   }
// }

module.exports = {
    distDir: 'build',
}