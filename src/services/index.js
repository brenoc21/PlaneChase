
export const fetchCards = async () => {
    let response = {}
  return fetch('https://api.scryfall.com/cards/search?q=t%3Aplane', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers here
    },
  })
    .then(response => response.json())
    .then(data => {
        return data
      
    })
    .catch(error => {
      // Handle any errors here
      console.error(error);
    });
};

