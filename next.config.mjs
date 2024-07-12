import dotenv from 'dotenv';
import webpack from 'webpack'; // Uncomment this line

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