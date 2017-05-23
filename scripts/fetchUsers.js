const fetch = require ('node-fetch')
const fs = require ('fs-extra-promise')

async function renderUsers() {
  try {
    const url = 'http://dev.getmigo.com/api/users?limit=2'
    const response = await fetch(url)
    const users = await response.json()

    return fs.outputFile(
     `pages/accounts/index.json`,
      JSON.stringify(users, null, 2)
    )
  } catch (error) {
   console.log('Error writing users data', error)
   return Promise.reject('error')
  }
}

renderUsers()
