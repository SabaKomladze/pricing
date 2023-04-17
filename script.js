let view = document.getElementById('views');
let cost = document.getElementsByClassName('cost');
let slider = document.getElementById('range');
let toggle = document.getElementById('billing');
let isYearly = false;
let pageViews = ["10K","50K", "100K","500K","1M"];
let perMonth = [8,12,16,24,36];


slider.addEventListener('input',function(){
    updateValue();
    view.innerHTML = pageViews[slider.value];
})

toggle.addEventListener('change' , function(){
    console.log(isYearly);
    if(isYearly == false){
        isYearly = true;
    }else{
        isYearly = false;
    }
    console.log(isYearly);
    updateValue();

    
});


function updateValue(){
    if(isYearly){
        cost[0].innerHTML = perMonth[slider.value] * .75;
    }else{ 
        cost[0].innerHTML = perMonth[slider.value];
    }
    
}