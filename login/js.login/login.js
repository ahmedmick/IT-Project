// to hide the placeholder when focus in input username
var myInput =document.getElementById('username');
myInput.onfocus = function (){
    'use strict';
    this.setAttribute('data', this.getAttribute('placeholder'));
    this.setAttribute('placeholder','');
};
// to hide the placeholder when focus in input password
var myInput2 =document.getElementById('password');
myInput2.onfocus = function (){
    'use strict';
    this.setAttribute('data2', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
};
// to get the placeholder when blur in input username
var myInput =document.getElementById('username');
myInput.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data'));
    this.setAttribute('data','');
};
// to get the placeholder when blur in input password
var myInput2 =document.getElementById('password');
myInput2.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data2'));
    this.setAttribute('data2', '');
};

// show/hide password on click
var state = flase;
function toggle(){
    if(state){
        document.getElementById('password').setAttribute('type','password');
        document.getElementById('eye').style.color='#71797e'
        state = false;
    }
    else{
        document.getElementById('password').setAttribute('type','text');
        document.getElementById('eye').style.color='#5887ef'
        state = true;
    }
}


