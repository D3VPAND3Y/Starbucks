function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeColor(color){
    document.querySelector('.starbucks').style.backgroundColor = color;
}
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const starbucks = document.querySelector('.starbucks');
const circle = document.querySelector('.circle');
const starbuck = document.querySelector('.starbuck');

image1.addEventListener('click',()=>{
    starbucks.src = 'img1.png';
    circle.style.backgroundColor = '#017143';
    starbuck.style.color = '#017143';
})
image2.addEventListener('click',()=>{
    starbucks.src = 'img2.png';
    circle.style.backgroundColor = '#f3c7c6';
    starbuck.style.color = '#f3c7c6';
})
image3.addEventListener('click',()=>{
    starbucks.src = 'img3.png';
    circle.style.backgroundColor = '#d35095';
    starbuck.style.color = '#d35095';
})