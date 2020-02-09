// init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();

// init weather object
/* To get the second value/element (because it was 'current' for temperature info but 'location' had the location info) I had to create a 2nd class called 'loc = new Weather' below. Then chain that to the getWeather function and change the paint to paint2 which was also added in the UI.js file.
in weather.js file I had to switch the line: 'return data.current' to an array: 'return [data.current, data.location]' so I had both objects of data.
Finally, on UI.js I had to crate the paint2 function and give it the 2nd class object parameter */

const weather = new Weather(weatherLocation.city, weatherLocation.state);
const loc = new Weather(weatherLocation.city, weatherLocation.state)

// init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // set location in localstorage
  weather.changeLocation(`${city} ${state}`)
  loc.changeLocation(`${city} ${state}`)
  storage.setLocationData(city, state)

  getWeather()

  // close modal
  $('#locModal').modal('hide');
})


function getWeather(){
weather.getWeather()
    .then(res => {
      console.log(res[1]);
      ui.paint(res[0]);
    })
    .catch(err => console.log(err))

    loc.getWeather()
    .then(res => {
      ui.paint2(res[1]);
    })
    .catch(err => console.log(err))
}




   
