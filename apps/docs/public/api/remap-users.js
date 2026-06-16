const data = require('./users-10K.json')
const fs = require('fs')

const remapped = data.map(user => {
   return {
       ...user,
       name: user.name.replaceAll('Miss. ', '').replaceAll('Mr. ', '').replaceAll('Ms. ', '').replaceAll('Mrs. ', '')
   }
});


fs.writeFileSync('users-mapped.json', JSON.stringify(remapped));
