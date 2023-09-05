/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      '*',
      'localhost'
    ]
  }
}
