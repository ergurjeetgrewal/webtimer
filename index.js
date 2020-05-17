let todaytime;
let date;
let localtime;
let localdate;
setInterval(() => {
    todaytime = new Date();
    localtime = todaytime.getHours() + ":" + todaytime.getMinutes() + ":" + todaytime.getSeconds();
    localdate = todaytime.getDate()+":"+todaytime.getMonth()+":"+todaytime.getFullYear();
    document.getElementById("timer").innerHTML = localtime+"<br>"+localdate;
}, 1000);
