const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
// console.log(timeEl);
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone= document.getElementById('time-zone');
const country = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl= document.getElementById('current-temp');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const API_KEYS ='bb3ec820ea7d117659f2d86711912853'

setInterval(() => {
    const time =new Date()
    // console.log(time);
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hour > 13 ? 'PM' : 'AM'
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    console.log(hoursIn12HrFormat);

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ' ,' + date + ' ' + months[month]



},1000);

 getWeatherData()
 function getWeatherData (){
    navigator.geolocation.getCurrentPosition((sucess) => {
        console.log(sucess);

        let {latitude, longitude} = sucess.coords;

        fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEYS}`).then(res => res.json()).then(data =>{
            console.log(data)
            showWeatherData(data);

        })


    })
 }

 function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed}= data.current;
console.log(pressure);
    currentWeatherItemsEl.innerHTML =
    ` <div class="weather-item">
    <div><p>Humidity</p></div>
     <div><p>${humidity}%</p></div>
 </div>
 <div class="weather-item">
    <div> <p>Pressure</p></div>
   <div><p>${pressure}</p></div>
 </div>
 <div class="weather-item">
     <div><p>Wind speed</p></div>
    <div><p>${wind_speed}</p></div>
 </div>`;
 }
 
