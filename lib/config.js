module.exports = {
  port: process.env.PORT || 8000,
  mongoUri: process.env.MONGO_URI,
  secret: process.env.SECRET || 'secret'
}
