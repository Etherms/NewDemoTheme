document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.toggle');
  var navmenuDropdown = document.querySelector('.navmenu-dropdown');
  var headerWrapper = document.querySelector('.header-wrapper'); // Corrected selector

  toggle.addEventListener('click', function() {
    if (navmenuDropdown.style.display === 'none') {
      navmenuDropdown.style.display = 'block';
      headerWrapper.style.boxShadow = 'none';
      headerWrapper.style.borderBottom = '1px solid black';
    } else {
      navmenuDropdown.style.display = 'none';
      headerWrapper.style.boxShadow = '0px 4px 10px #383838';
      headerWrapper.style.borderBottom = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var login = document.querySelector('.person');
    var exitlogin = document.querySelector('.close-login');
    var loginfunction = document.querySelector('.login-function');
    var cart = document.querySelector('.bag');
    var exitcart = document.querySelector('.close-cart');
    var cartfunction = document.querySelector('.cart-value');
    var searchRight = document.querySelector('.search-right');
    var searchLeft = document.querySelector('.search-left');
    var exit = document.querySelector('.close-search');
    var searchfunction = document.querySelector('.search-function');


    function toggleCartFuction() {
      if (cartfunction.style.display === 'none') {
        cartfunction.style.display = 'flex';
        cartfunction.classList.add('show');
      } else {
        cartfunction.style.display = 'none';
        cartfunction.classList.remove('show');
      }
    }
    function toggleLoginFunction() {
      if (loginfunction.style.display === 'none') {
        loginfunction.style.display = 'flex';
      } else {
        loginfunction.style.display = 'none';
      }
    }
    function toggleSearchFunction() {
      if (searchfunction.style.display === 'none') {
        searchfunction.style.display = 'block';
      } else {
        searchfunction.style.display = 'none';
      }
    }

    searchLeft.addEventListener('click', toggleSearchFunction);
    searchRight.addEventListener('click', toggleSearchFunction);
    exit.addEventListener('click', toggleSearchFunction);
    cart.addEventListener('click', toggleCartFuction);
    exitcart.addEventListener('click', toggleCartFuction);
    login.addEventListener('click', toggleLoginFunction);
    exitlogin.addEventListener('click', toggleLoginFunction);
  });