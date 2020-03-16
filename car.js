var coolstuff = function(){
    
    document.getElementById('cool').className = 'cooler red';
    
    
}

var car = {
    
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    seats: ['seat1','seat2','seat3','seat4'],
    carturnon: false,
    turnon: function(){
        
        this.carturnon = true;
        
    },
    
    fly: function() {
    
        alert('fly');
}


};

