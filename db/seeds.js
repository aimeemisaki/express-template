const mongoose = require('./connection')

const Item = require('../models/Item')
const itemseeds = require('./seeds.json')

// in case you make a user/owner with a User schema
/// const User = require('../models/User')

// Items.deleteMany({})
//     .then(() => User.deleteMany({}))
//     .then(() => {
//         return User.create({ email: 'fake@email.com', name: 'Fake Person' })
//             .then((user) => 
//                 itemseeds.map((bookmark) => ({...item, owner: user._id }))
//             )
//             .then((bookmarks) => Item.insertMany(items))
//     })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => {
//         process.exit()
//     })