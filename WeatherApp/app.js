const BASE_URL='https://api.openweathermap.org/data/2.5/weather?q=';
const img_url='https://api.unsplash.com/search/photos?page=1&query='
const form=document.querySelector('form');
const place=document.getElementById("place");
const date=document.getElementById("date");
const minmax=document.getElementById("minmax");
const temp=document.getElementById("temp");
const winds=document.getElementById('windspeed');
let weather=document.getElementById("weather");


const searchWeather=function(text){
fetch(`${BASE_URL}${text}&units=metric&appid=b76195175f60ed85f6c08a58fcb6b987`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data)
      changes(data);
    })
    .catch(function(err){
        console.log(err);
    })
}


function changes(data){
 place.innerText=data.name;
 weather.innerText=data.weather[0].main;
 image(data.weather[0].main,data.name)
  winds.innerText=`${data.wind.speed} m/s`;   
  temp.innerText=`${data.main.temp} °C`;
  date.innerText=`${new Date().getDate()} ${new Date().toString().substring(4,7)} ${new Date().toString().substring(11,15)}`
  minmax.children[0].innerText=`${parseInt(data.main.temp_min)} °C (min)`
  minmax.children[1].innerText=`${parseInt(data.main.temp_max)} °C (max)`
}


function image(img,place){
  
    fetch(`${img_url}${img}-${place}-atmosphere&client_id=KOR-zuTIujoA3favNatW7r43mmWthiLBKFy86lh_mp0`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
       
        if(data.results.length>0){
            const len=data.results.length;
            const rnd=Math.floor(Math.random()*len)
        const link=data.results[rnd].urls.full;
        
        document.querySelector('body').style.backgroundImage=`url(${link})`;
        document.querySelector('body').style.backgroundSize='cover'
        document.querySelector('body').style.backgroundRepeat='no-repeat'
   
    }
       
    })
    .catch(function(err){
        console.log(err);
    })
}

form.addEventListener('submit',function(e){
e.preventDefault();
const searchtext=form.children[0].value;
if(form.children[0].value!="")
searchWeather(searchtext);
form.children[0].value = "";
})

