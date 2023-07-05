/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'mutengabamboo.co.zw']
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
}
