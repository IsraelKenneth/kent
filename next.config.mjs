/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
      },

      output: 'export',

    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'images.unsplash.com',
    //         // Optionally, you can also specify pathname and port
    //       },
    //     ],
    //   },
};


export default nextConfig;
