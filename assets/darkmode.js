document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var root = document.querySelector(':root');
  
    if (!sessionStorage.getItem('checkboxState')) {
      applyOriginalMode();
    } else {
      checkbox.checked = true;
      applyDarkMode();
    }
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        applyDarkMode();
        sessionStorage.setItem('checkboxState', 'checked');
      } else {
        applyOriginalMode();
        sessionStorage.removeItem('checkboxState');
      }
    });
  
    function applyOriginalMode() {
        root.style.setProperty('--color1', '');
        root.style.setProperty('--background1', '');
        root.style.setProperty('--background1-2', '');
        root.style.setProperty('--color2', '');
        root.style.setProperty('--background2', '');
        root.style.setProperty('--light-linear-gradient2', '');
        root.style.setProperty('--light-linear-gradient1', '');
        root.style.setProperty('--text-shadow','');
        root.style.setProperty('--body-background','');
        root.style.setProperty('--dark-linear-gradient2','');
      ;
    }
  
    function applyDarkMode() {
        var color1Value = getComputedStyle(root).getPropertyValue('--color1').trim();
        var background1Value = getComputedStyle(root).getPropertyValue('--background1').trim();    
        var color2Value = getComputedStyle(root).getPropertyValue('--color2').trim();
        var background2Value = getComputedStyle(root).getPropertyValue('--background2').trim();
        var backgroundLinear1 = getComputedStyle(root).getPropertyValue('--dark-linear-gradient1').trim();
        var backgroundLinear2 = getComputedStyle(root).getPropertyValue('--dark-linear-gradient1').trim();
        var none = getComputedStyle(root).getPropertyValue('--none').trim();
        var bodybackground = getComputedStyle(root).getPropertyValue('--body-background2').trim();
        var bodybackground2 = getComputedStyle(root).getPropertyValue('--body-background').trim();
    
        // Light-Dark
    
        root.style.setProperty('--color1', color2Value);
        root.style.setProperty('--background1', background2Value);
        root.style.setProperty('--background1-2',background2Value);
        root.style.setProperty('--light-linear-gradient1', backgroundLinear1);
        root.style.setProperty('--light-linear-gradient2', backgroundLinear2);
        root.style.setProperty('--text-shadow',none);
    
        // Dark-Light
        root.style.setProperty('--dark-linear-gradient2',bodybackground2)
        root.style.setProperty('--color2', color1Value);
        root.style.setProperty('--background2', background1Value);
        root.style.setProperty('--body-background',bodybackground);
    
    
      console.log('Checked');
    }
  });
  