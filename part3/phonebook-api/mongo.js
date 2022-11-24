const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.error('error connecting to MongoDB:', err.message)
  })

process.on('uncaughtException', () => {
  mongoose.disconnect()
})