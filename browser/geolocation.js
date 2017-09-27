// geolocation.js

navigator.geolocation.getCurrentPosition(function (data) {
    console.log(data);
    console.log('paste in Google:', data.coords.latitude + "," + data.coords.longitude);
})