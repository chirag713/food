let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let myprogressbar1 = document.getElementById("myprogressbar1");
let myprogressbar2 = document.getElementById("myprogressbar2");
let myprogressbar3 = document.getElementById("myprogressbar3");
let a = document.getElementById("input1");
let b = document.getElementById("input2");
let c = document.getElementById("input3");
var bill1,bill2,bill3;
function chirag1() {
    range1.style.opacity = 1;
}
function chirag2() {
    range2.style.opacity = 1;
}
function chirag3() {
    range3.style.opacity = 1;
}
function order1(elem) {


    if (isNaN(elem.value)) {
        document.getElementById("res1").innerText = "Please enter numbers only";
    }
    else {

        if (elem.value > 5) {
            document.getElementById("res1").innerText = "Please enter small number";
        }
        else if (elem.value < 0) {
            document.getElementById("res1").innerText = "Please enter positive number";
        }
        else document.getElementById("res1").innerText = "";

    }
    if (elem.value >= 0 && elem.value <= 5) {
        myprogressbar1.value = elem.value * 20;
    }
    else {
        myprogressbar1.value = 0;
    }
}
function order2(elem) {


    if (isNaN(elem.value)) {
        document.getElementById("res2").innerText = "Please enter numbers only";
    }
    else {

        if (elem.value > 5) {
            document.getElementById("res2").innerText = "Please enter small number";
        }
        else if (elem.value < 0) {
            document.getElementById("res2").innerText = "Please enter positive number";
        }
        else document.getElementById("res2").innerText = "";

    }
    if (elem.value >= 0 && elem.value <= 5) {
        myprogressbar2.value = elem.value * 20;
    }
    else {
        myprogressbar2.value = 0;
    }
}
function order3(elem) {


    if (isNaN(elem.value)) {
        document.getElementById("res3").innerText = "Please enter numbers only";
    }
    else {

        if (elem.value > 5) {
            document.getElementById("res3").innerText = "Please enter small number";
        }
        else if (elem.value < 0) {
            document.getElementById("res3").innerText = "Please enter positive number";
        }
        else document.getElementById("res3").innerText = "";

    }
    if (elem.value >= 0 && elem.value <= 5) {
        myprogressbar3.value = elem.value * 20;
    }
    else {
        myprogressbar3.value = 0;
    }
}
myprogressbar1.addEventListener("change", () => {
    a.value = Math.floor(myprogressbar1.value / 20);
})
myprogressbar2.addEventListener("change", () => {
    b.value = Math.floor(myprogressbar2.value / 20);
})
myprogressbar3.addEventListener("change", () => {
    c.value = Math.floor(myprogressbar3.value / 20);
})
function bill(){
    var total=Math.floor(myprogressbar3.value / 20)*50+Math.floor(myprogressbar2.value / 20)*60+Math.floor(myprogressbar1.value / 20)*100;
    var bills=document.getElementById("bills");
    bills.style.opacity=1;
    bills.innerHTML="pizza:"+ Math.floor(myprogressbar1.value / 20)+"-->100x"+ Math.floor(myprogressbar1.value / 20)+"="+ Math.floor(myprogressbar1.value / 20)*100+"</br>"+"chaumin:"+ Math.floor(myprogressbar2.value / 20)+"-->60x"+ Math.floor(myprogressbar2.value / 20)+"="+ Math.floor(myprogressbar2.value / 20)*60+"</br>"+"Burger:"+ Math.floor(myprogressbar3.value / 20)+"-->50x"+ Math.floor(myprogressbar3.value / 20)+"="+ Math.floor(myprogressbar3.value / 20)*50+"<br>"+"Total="+total
}