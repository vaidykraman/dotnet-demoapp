//
// Weather script used on Weather.cshtml page
//

// DIV to inform users of problems
let errorBox = document.getElementById('errorBox');
getWeather();

// Get the weather data from the API
// Of a given position (see https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition)
function getWeather() {

  let spinner = document.getElementById('spinner');

  //Weather1
  // Call API with fetch
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=30301,us&appid=676398400456080ce88d9882d01d59b2', {
  "method": "GET"
})
  .then((response) => {
    // fetch handles errors strangely, we need to trap non-200 codes here
    if (!response.ok) {
      throw Error(response.statusText + " " + response.status);
    }
    console.log(response);
    // Convert JSON results
    return response.json().then(function(json) {
      console.log(json);
      let wList = document.getElementById('weather-list1')
      wList.innerHTML += `<li>City: &nbsp; ${json.name}</li>`
      wList.innerHTML += `<li>Country: &nbsp; ${json.sys.country}</li>`
      for (const result of json.weather) {
       
        wList.innerHTML += `<li>The weather currently is: &nbsp; ${result.description}</li>`
      }
     
    });
  })
  .then((weather) => {
    // Got some real data, so...
    spinner.parentNode.removeChild(spinner);
  })
  .catch(err => {
    console.log(err);
  });
//Weather2
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=676398400456080ce88d9882d01d59b2', {
  "method": "GET"
})
  .then((response) => {
    // fetch handles errors strangely, we need to trap non-200 codes here
    if (!response.ok) {
      throw Error(response.statusText + " " + response.status);
    }
    console.log(response);
    // Convert JSON results
    return response.json().then(function(json) {
      console.log(json);
      let wList = document.getElementById('weather-list2')
      wList.innerHTML += `<li>City: &nbsp; ${json.name}</li>`
      wList.innerHTML += `<li>Country: &nbsp; ${json.sys.country}</li>`
      for (const result of json.weather) {
       
        wList.innerHTML += `<li>The weather currently is: &nbsp; ${result.description}</li>`
      }
     
    });
  })
  .then((weather) => {
    // Got some real data, so...
    spinner.parentNode.removeChild(spinner);
  })
  .catch(err => {
    console.log(err);
  });

  fetch('https://api.openweathermap.org/data/2.5/weather?zip=75093,us&appid=676398400456080ce88d9882d01d59b2', {
  "method": "GET"
})
  .then((response) => {
    // fetch handles errors strangely, we need to trap non-200 codes here
    if (!response.ok) {
      throw Error(response.statusText + " " + response.status);
    }
    console.log(response);
    // Convert JSON results
    return response.json().then(function(json) {
      console.log(json);
      let wList = document.getElementById('weather-list3')
      wList.innerHTML += `<li>City: &nbsp; ${json.name}</li>`
      wList.innerHTML += `<li>Country: &nbsp; ${json.sys.country}</li>`
      for (const result of json.weather) {
       
        wList.innerHTML += `<li>The weather currently is: &nbsp; ${result.description}</li>`
      }
     
    });
  })
  .then((weather) => {
    // Got some real data, so...
    spinner.parentNode.removeChild(spinner);
  })
  .catch(err => {
    console.log(err);
  });

  fetch('https://api.openweathermap.org/data/2.5/weather?zip=60606,us&appid=676398400456080ce88d9882d01d59b2', {
  "method": "GET"
})
  .then((response) => {
    // fetch handles errors strangely, we need to trap non-200 codes here
    if (!response.ok) {
      throw Error(response.statusText + " " + response.status);
    }
    console.log(response);
    // Convert JSON results
    return response.json().then(function(json) {
      console.log(json);
      let wList = document.getElementById('weather-list4')
      wList.innerHTML += `<li>City: &nbsp; ${json.name}</li>`
      wList.innerHTML += `<li>Country: &nbsp; ${json.sys.country}</li>`
      for (const result of json.weather) {
       
        wList.innerHTML += `<li>The weather currently is: &nbsp; ${result.description}</li>`
      }
     
    });
  })
  .then((weather) => {
    // Got some real data, so...
    spinner.parentNode.removeChild(spinner);
  })
  .catch(err => {
    console.log(err);
  });
}