const fetch = require ('node-fetch')
const fs = require ('fs-extra-promise')

async function renderMarkets() {
  try {
    const url = 'http://dev.getmigo.com/api/markets'
    const response = await fetch(url)
    const market = await response.json()

    /*
    
    TODO: Create multiple files based on number of locations
    
    */
    return fs.outputFile(
     `pages/locations/index.json`,
      JSON.stringify(market, null, 2)
    )
  } catch (error) {
   console.log('Error writing market data', error)
   return Promise.reject('error')
  }
}

renderMarkets()
