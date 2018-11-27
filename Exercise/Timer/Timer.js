var time = 0;

var timer = setInterval(function(){
    time +=1;
    console.log(time + ' seconds...');
    if (time >= 5){
        clearInterval(timer);
    }
}, 2000);