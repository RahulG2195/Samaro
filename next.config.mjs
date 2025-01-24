import dotenv from 'dotenv';
import webpack from 'webpack'; // Uncomment this line
import path from 'path';


dotenv.config();

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
   

  images: {
    domains: ["localhost", "samamro.in"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samaro.in",
        pathname: "/uploads/**",
      },
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Provide jQuery globally
  config.resolve.alias["@uploads"] = path.resolve("/var/www/uploads");
 
   
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
