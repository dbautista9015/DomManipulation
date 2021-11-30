let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

btn1.addEventListener("click", function(){
    btn1.textContent = "Hello Btn #1";
});

btn2.addEventListener("click", function(){
    btn2.style.backgroundColor = 'Red';
});

btn3.addEventListener("click", function(){
    alert("Scooby Dooo!!!!!!");
});

btn4.addEventListener("mouseover", function(){
    btn4.style.fontFamily = "Cursive";
});

btn5.addEventListener("click", function(){
    btn5.style.display = "none";
});

btn6.addEventListener("click", function(){
    btn6.style.borderRadius = "50%";
});

btn7.addEventListener("click", function(){
    btn7.style.color = "yellow";
});

btn8.addEventListener("click", function(){
    const d = new Date();
    btn8.innerHTML = d;

});

btn9.addEventListener("click", function(){
    btn9.textContent = Math.floor(Math.random() * 50);
});

btn10.addEventListener("mouseover", function(){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.position = "relative";
});









