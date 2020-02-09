class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.region = document.querySelector('.w-region')
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feelslike');
    this.wind = document.getElementById('w-wind');
    
  }

  paint(weather) {
    
    this.desc.textContent = weather.weather_descriptions;
    this.string.textContent = `${weather.temperature} °F`;
    this.icon.setAttribute('src', weather.weather_icons);
    this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike} °F`;
    this.wind.textContent = `Wind: ${weather.wind_speed}mp/h Direction: ${weather.wind_dir}`;
  }

  paint2(loc) {
    this.location.textContent = `${loc.name}, ${loc.region}`;
    // this.region.textContent = loc.region
  }
}