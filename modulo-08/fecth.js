function getWeather (woeid) {
    fetch('https://crossorigin.me/htops://www.metaweather.com/api/location/' + woeid + '/')
        .then(result => {
            console.log(result);
            return result.json() ;
        })
        .then( data =>{
            console.log(data)
        })
}
getWeather(44418);