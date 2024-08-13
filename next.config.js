module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

  const path = require('path')
 
  module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }