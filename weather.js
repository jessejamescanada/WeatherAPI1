class Weather {
  constructor(city, state) {
    this.apiKey = 'acae90228ebd2c563a4d77cb78239eb4'
    this.city = city;
    this.state = state;
  }

  // fetch weather from api
  async getWeather() {
    const res = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.state}&units=f`);

    // const location = document.getElementById('w-location');
    // location.textContent = `${this.city}, ${this.state}`
    const data = await res.json();
    console.log(data);
    return [data.current, data.location]
    console.log(user);
    
  }
  

  changeLocation(city, state){
    this.city = city;
    this.state = state
  }
  
}

// if you cnage line 14 from data.current to data.location you get the location