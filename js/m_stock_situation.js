const showMoreBtn = document.getElementById('show-more-btn');
const hiddenContents = document.querySelectorAll('.hidden');

let isHidden = true;

showMoreBtn.addEventListener('click', function() {
  if (isHidden) {
    hiddenContents.forEach(content => content.style.display = 'block');
    showMoreBtn.textContent = '접기';
    isHidden = false;
  } else {
    hiddenContents.forEach(content => content.style.display = 'none');
    showMoreBtn.textContent = '더보기';
    isHidden = true;
  }
});