import axios from 'axios';

// PART 1: Show Dog Photo



function showDogPhoto(evt) {
  let dogImg = document.querySelector('#dog-image') 
  axios.get(`https://dog.ceo/api/breeds/image/random`)
  .then((response) => {
    let imageHolder = document.createElement("img")
    imageHolder.src = response.data.message
    dogImg.appendChild(imageHolder)
  })
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

 async function showWeather(evt) {
    const zipcode = document.querySelector('#zipcode-field').value;
    const response = await axios.get(`/weather.txt?zipcode=${zipcode}`);
    document.querySelector('#weather-info').innerText = response.data
 

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies


async function orderCookies(evt) {
  evt.preventDefault()
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  const cookieType = document.querySelector('#cookie-type-field').value
  const qty = document.querySelector('#qty-field').value
  // TODO: show the result message after your form
  const response = await axios.post('/order-cookies.json', {cookieType: cookieType, qty: qty})
  
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  const orderStatus = document.querySelector("#order-status")
  if( response.data.resultCode === 'ERROR'){
    orderStatus.classList.add('order-error')
  }
    else {
      orderStatus.classList.remove('order-error')
    }

}

document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
