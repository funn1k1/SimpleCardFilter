const btns = document.querySelectorAll(".filter-btns__item");
const images = document.querySelectorAll('.filter-content img');
const select = document.querySelector('.filter-options');

select.addEventListener('click', function() {
  filterImage(this.value);
});

for (let btn of btns) {
  btn.addEventListener('click', function() {
    filterImage(this.dataset.filter);
  });
}

function filterImage(filter) {
  for (let img of images) {
    img.style.display = "none";
    if (img.classList.contains(filter)) {
      setTimeout(() => {
        img.style.display = "block";
      }, 0);
    }
  }

  for (let btn of btns) {
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }
  select.value = filter;  
}

