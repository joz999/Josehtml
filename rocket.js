var timer = null
var countdownnumber = 10;

var changestate = function(state) {
    
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownnumber = 10;

    document.getElementById ('countdown').innerHTML = countdownnumber;
    
    if(state == 2) {
            
        timer = setInterval(function () {
            
            countdownnumber = countdownnumber - 1
            document.getElementById ('countdown').innerHTML = countdownnumber;
            
            if (countdownnumber > 4 && countdownnumber <= 7) {
                
                
                document.getElementById('nervous').className = 'nervous show';
                
            } else {
                
                
                document.getElementById('nervous').className = 'nervous';
                
            }
            
            
            if (countdownnumber <= 0) {
                
               
                
                changestate(3);
                
            };
            
            
        }, 1000);
        
        
    }else if(state == 3) {
        
        var success = setTimeout(function() {
            
            var randomnumber = Math.round(Math.random()*10);
            console.log(randomnumber)
            
            
            if (randomnumber > 5){
                
                changestate(4);
                
            } else {
                
                
                changestate(5);
                
            }
            
        }, 2000);
        
    }
            
            
    };
    
