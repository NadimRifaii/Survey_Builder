import mongoose from "mongoose"
const MONG_URL = process.env.MONG_URL
const MONG_URL_LOCAL = `mongodb://localhost:27017/SurveyDB`
async function connectToMongo() {
  mongoose.connection.once('open', () => {
    console.log('Mongo is ready')
  })
  mongoose.connection.on('error', () => {
    console.log(`Couldn't connect to mongodb`)
  })
  try {
    await mongoose.connect(MONG_URL)
  } catch (error) {
    console.log(error)
  }
}
export default connectToMongo