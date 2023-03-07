const header = document.querySelector('header');
const gnb = document.querySelector('.gnb');

console.log(header);
console.log(gnb);

header.addEventListener('mouseover', function(){
    this.classList.add('active');
});

header.addEventListener('mouseout', function(){
    this.classList.remove('active');
});
