window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  try {
    //slider
    let slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');
    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    prev.addEventListener('click', function () {
      plusSlides(-1);
    });
    next.addEventListener('click', function () {
      plusSlides(1);
    });
  }
  catch (e) {
    //end slider
    let productItem = document.querySelectorAll('.product_item'),
    productFooter = document.querySelectorAll('.product_item_footer');

  for (let i = 0; i < productItem.length; i++) {
    productItem[i].onmouseover = function () {
      productFooter[i].style.display = 'block';
    };
    productItem[i].onmouseout = function () {
      productFooter[i].style.display = 'none';
    };
  } 
    
  }


}());