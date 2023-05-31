document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('.darkMode-btn');
  var root = document.querySelector(':root');
  var darkLogos = document.querySelectorAll('.dark-brand-logo');
  var whiteLogos = document.querySelectorAll('.white-brand-logo');

  if (!sessionStorage.getItem('checkboxState')) {
    applyOriginalMode();
  } else {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = true;
    });
    applyDarkMode();
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        applyDarkMode();
        sessionStorage.setItem('checkboxState', 'checked');
      } else {
        applyOriginalMode();
        sessionStorage.removeItem('checkboxState');
      }
    });
  });

  function applyOriginalMode() {
    root.style.removeProperty('--color1');
    root.style.removeProperty('--background1');
    root.style.removeProperty('--background1-2');
    root.style.removeProperty('--color2');
    root.style.removeProperty('--background2');
    root.style.removeProperty('--light-linear-gradient2');
    root.style.removeProperty('--light-linear-gradient1');
    root.style.removeProperty('--text-shadow');
    root.style.removeProperty('--body-background');
    root.style.removeProperty('--dark-linear-gradient2');
    root.style.removeProperty('--header-background');
    root.style.removeProperty('--accordion-background-dark');
    root.style.removeProperty('--filter-color-dark');
    root.style.removeProperty('--collection-light');
    root.style.removeProperty('--collection-dark');
    root.style.removeProperty('--collection-box-shadow');
    root.style.removeProperty('--product-box');
    root.style.removeProperty('--pagination-dark');

    // Loop through all darkLogos and whiteLogos and set their display property
    darkLogos.forEach(function(darkLogo) {
      darkLogo.style.display = 'flex';
    });
    whiteLogos.forEach(function(whiteLogo) {
      whiteLogo.style.display = 'none';
    });
  }

  function applyDarkMode() {
    var color1Value = getComputedStyle(root).getPropertyValue('--color1').trim();
    var background1Value = getComputedStyle(root).getPropertyValue('--background1').trim();
    var color2Value = getComputedStyle(root).getPropertyValue('--color2').trim();
    var background2Value = getComputedStyle(root).getPropertyValue('--background2').trim();
    var backgroundLinear1 = getComputedStyle(root).getPropertyValue('--dark-linear-gradient1').trim();
    var backgroundLinear2 = getComputedStyle(root).getPropertyValue('--dark-linear-gradient2').trim();
    var none = getComputedStyle(root).getPropertyValue('--none').trim();
    var bodybackground = getComputedStyle(root).getPropertyValue('--body-background2').trim();
    var bodybackground2 = getComputedStyle(root).getPropertyValue('--body-background').trim();
    var headerDarkBg =  getComputedStyle(root).getPropertyValue('--header-dark-background').trim();
    var accordBack =  getComputedStyle(root).getPropertyValue('--accordion-background-light').trim();
    var filterColor =  getComputedStyle(root).getPropertyValue('--filter-color-light').trim();
    var collectColor =  getComputedStyle(root).getPropertyValue('--collection-dark').trim();
    var collectColorLight =  getComputedStyle(root).getPropertyValue('--collection-light').trim();
    var collectBox = getComputedStyle(root).getPropertyValue('--collection-box-shadow-dark').trim();
    var pagination = getComputedStyle(root).getPropertyValue('--pagination-light').trim();

    // Light-Dark
    root.style.setProperty('--color1', color2Value);
    root.style.setProperty('--background1', background2Value);
    root.style.setProperty('--background1-2', background2Value);
    root.style.setProperty('--light-linear-gradient1', backgroundLinear1);
    root.style.setProperty('--light-linear-gradient2', backgroundLinear2);
    root.style.setProperty('--text-shadow', none);
    root.style.setProperty('--header-background', headerDarkBg);
    root.style.setProperty('--collection-light', collectColor);
    root.style.setProperty('--collection-box-shadow', collectBox);
    root.style.setProperty('--product-box', collectColor);

    // Dark-Light
    root.style.setProperty('--dark-linear-gradient2', bodybackground2);
    root.style.setProperty('--color2', color1Value);
    root.style.setProperty('--background2', background1Value);
    root.style.setProperty('--body-background', bodybackground);
    root.style.setProperty('--accordion-background-dark', accordBack);
    root.style.setProperty('--filter-color-dark', filterColor);
    root.style.setProperty('--collection-dark', collectColorLight);
    root.style.setProperty('--pagination-dark', pagination);

    // Loop through all darkLogos and whiteLogos and set their display property
    darkLogos.forEach(function(darkLogo) {
      darkLogo.style.display = 'none';
    });
    whiteLogos.forEach(function(whiteLogo) {
      whiteLogo.style.display = 'flex';
    });

    console.log('Checked');
  }
});
