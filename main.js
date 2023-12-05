function Timer(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if(hour < 10){
        hour = "0" + hour
    }
    if(second < 10){
        second = "0" + second
    }
    if(minute < 10){
        minute = "0" + minute
    }
    
    document.querySelector('.hour').innerHTML = hour;
    document.querySelector('.minute').innerHTML = minute;
    document.querySelector('.second').innerHTML = second;
    
}

setInterval(Timer,10);