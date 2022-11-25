const mongoose = require('mongoose')

const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV } = process.env

const mongoUrl = NODE_ENV === 'test' ? MONGODB_URI_TEST : MONGODB_URI

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected')
  })
  .catch(err => {
    console.error('error connecting to MongoDB:', err.message)
  })

process.on('uncaughtException', () => {
  mongoose.disconnect()
})
