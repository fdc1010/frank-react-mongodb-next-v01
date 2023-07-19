/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"]
  },
  env: {
    MONGODB_URI:"mongodb://admintest:admintest@localhost:27017/db_dev",
    MONGODB_OPTIONS: {
      "useNewUrlParser": true
    }
  }
}

module.exports = nextConfig
