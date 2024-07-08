
// /** @type {import('next').NextConfig} */
// // const webpack = require("webpack");
// // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
// //   config.plugins.push(
// //     new webpack.ProvidePlugin({
// //       $: "jquery",
// //       jQuery: "jquery",
// //       "window.jQuery": "jquery",
// //     })
// //   );
// //   return config;
// // }

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // env: {
//   //   MYSQL_HOST: "localhost",
//   //   MYSQL_DATABASE: "samaro_db",
//   //   MYSQL_USER: "root",
//   //   MYSQL_PASSWORD: "",
//   //   MYSQL_PORT: "3306",
//   // },
  
// };

// export default nextConfig;



import dotenv from 'dotenv';
// import webpack from 'webpack'; // Uncomment if webpack customization is needed

dotenv.config();

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Provide jQuery globally
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};

export default nextConfig;

