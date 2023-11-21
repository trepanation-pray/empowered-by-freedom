document.addEventListener('DOMContentLoaded', () => {

    // Scroll animations
      var scrollElements = document.querySelectorAll('.j-scroll');
    
      let animationObserver = new IntersectionObserver((scrollElements) => {
        scrollElements.forEach(item => {
          if (item.intersectionRatio > 0) {
            item.target.classList.add('is-animated');
          }
        });
      });
    
      scrollElements.forEach(element => {
    
        const options = {
          root: null,
          rootMargin: '0px 0px -50% 0px',
          threshold: 0.5,
        }
        animationObserver.observe(element, options);
      });
    });
        