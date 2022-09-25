import mongoose from 'mongoose'

export const connect = async (url = '') => {
  try {
    mongoose.connect(url)
    console.log(url)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', async function () {
      const CatSchema = new mongoose.Schema({ name: String })
      const Cat = mongoose.model('Cat', CatSchema)

      const kitty = new Cat({ name: 'Zildjian' })
      kitty.save().then(() => console.log('meow'))
      console.log('Connection Successful!')
    })
    return true
  } catch (e) {
    console.log('error')
    return false
  }
}
