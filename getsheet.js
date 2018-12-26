const axios = require('axios')

var url = 'https://sheets.googleapis.com/v4/spreadsheets/1SCioXwFm1n_MsE-y4eOxatVw00kZnRAgpRdoOmZTMj4?&fields=sheets.properties'

const getBreeds = () => {
    try {
      return axios.get(url)
    } catch (error) {
      console.error(error)
    }
  }
  
  const countBreeds = async () => {
    const breeds = getBreeds()
      .then(response => {
        if (response.data.message) {
          console.log(
            `Got ${Object.entries(response.data.message).length} breeds`
          )
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  countBreeds()

