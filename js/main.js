const circle = document.querySelector('.circle');
const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')

function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
};


function changeCircleColor(color){
  circle.style.background = color;
};

function toggleMenu(){
  toggleBtn.classList.toggle('active')
  navigation.classList.toggle('active')
}

toggleBtn.addEventListener('click', ()=>{
  toggleMenu();
})