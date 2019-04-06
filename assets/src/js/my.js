(function slider() {
  let slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');


  //slider
  let slideIndex = 1;

  // showSlides(slideIndex);
  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex  =1;
  //   }
  //   if (n<1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => item.style.display = 'none');
  //   // for (let i = 0; i < slides.length; i++) {
  //   //   slides[i].style.display = 'none';
  //   // }
  //   // dots.forEach((item) => item.classList.remove('dot-active'));
  //   slides[slideIndex - 1].style.display = 'block';
  //   // dots[slideIndex - 1].classList.add('dot-active');
  // }

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', function(){
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', function(){
  //   plusSlides(1);
  // });

  //end slider

  //product

  let productItem = document.querySelectorAll('.product_item');
  let productFooter = document.querySelector('.product_item_footer');

  console.log(productItem);
  console.log(productFooter);

  productItem.onmouseover = function () {
    productFooter.style.display = 'block';
    
  };
  productItem.onmouseout = function () {
    document.getElementById('a').style.backgroundColor = '';
  };


}());