function loadMedia(url) {
    var mediaContainer = document.querySelector('.ICMedia');
    mediaContainer.innerHTML = '';
    
    if (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.gif')) {
      var mediaImage = document.createElement('img');
      mediaImage.src = url;
      mediaImage.style.maxHeight = '100%';
      mediaContainer.appendChild(mediaImage);
    } else {
      var mediaFrame = document.createElement('iframe');
      mediaFrame.src = url;
      mediaFrame.style.width = '100%';
      mediaFrame.style.height = '100%';
      mediaFrame.style.objectFit = 'none';
      mediaContainer.appendChild(mediaFrame);
    }
  }
  
  window.onload = function() {
    loadMedia('/QHS/qhslogan.jpg');
  };
  
  // Get all collapsible elements
  var collapsibles = document.getElementsByClassName("collapsible");
  var collapsiblesub1s = document.getElementsByClassName("collapsiblesub1");
  var collapsiblesub2s = document.getElementsByClassName("collapsiblesub2");
  for (var i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
      // Toggle the display of the corresponding submenu
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.querySelector('i').classList.remove('fa-minus-circle');
        this.querySelector('i').classList.add('fa-plus-circle');
      } else {
        // Hide all other submenus
        var allContent = document.getElementsByClassName("content");
        for (var j = 0; j < allContent.length; j++) {
          allContent[j].style.display = "none";
          var allIcons = allContent[j].previousElementSibling.querySelectorAll('i');
          for (var k = 0; k < allIcons.length; k++) {
            allIcons[k].classList.remove('fa-minus-circle');
            allIcons[k].classList.add('fa-plus-circle');
          }
          if (allContent[j].previousElementSibling.classList.contains('active')) {
            allContent[j].previousElementSibling.classList.remove('active');
            allContent[j].previousElementSibling.classList.remove('menuhoveractive');
          }
        }
        content.style.display = "block";
        this.querySelector('i').classList.remove('fa-plus-circle');
        this.querySelector('i').classList.add('fa-minus-circle');
        this.classList.add('active');
        this.classList.add('menuhoveractive');
      }
    });
  }
  // Add event listeners to each collapsiblesub1 element
  // Add event listeners to each collapsiblesub1 element
  for (var i = 0; i < collapsiblesub1s.length; i++) {
    collapsiblesub1s[i].addEventListener("click", function() {
      // Toggle the display of the corresponding sub-submenu
      var subcontent = this.nextElementSibling;
      var icon = this.querySelector('.icon');
      if (subcontent.style.display === "block") {
        subcontent.style.display = "none";
        icon.classList.add('fa-plus-circle');
        icon.classList.remove('fa-minus-circle');
        this.classList.remove('menuhoveractive');
      } else {
        // Hide all other sub-submenus
        var allSubcontent = document.getElementsByClassName("subcontent");
        for (var j = 0; j < allSubcontent.length; j++) {
          allSubcontent[j].style.display = "none";
          var allIcons = allSubcontent[j].previousElementSibling.querySelectorAll('i');
          for (var k = 0; k < allIcons.length; k++) {
            allIcons[k].classList.remove('fa-minus-circle');
            allIcons[k].classList.add('fa-plus-circle');
          }
          var allCollapsiblesub1s = allSubcontent[j].parentElement.querySelectorAll('.collapsiblesub1');
          for (var l = 0; l < allCollapsiblesub1s.length; l++) {
            allCollapsiblesub1s[l].classList.remove('menuhoveractive');
          }
        }
        icon.classList.add('fa-minus-circle');
        icon.classList.remove('fa-plus-circle');
        subcontent.style.display = "block";
        this.classList.add('menuhoveractive');
      }
    });
  }
  // Add event listeners to each collapsiblesub2 element
  for (var i = 0; i < collapsiblesub2s.length; i++) {
    collapsiblesub2s[i].addEventListener("click", function() {
      // Toggle the display of the corresponding sub-submenu
      var subsubcontent = this.nextElementSibling;
      var icon = this.querySelector('.icon');
      if (subsubcontent.style.display === "block") {
        subsubcontent.style.display = "none";
        icon.classList.add('fa-plus-circle');
        icon.classList.remove('fa-minus-circle');
      } else {
        // Hide all other sub-submenus
        var allSubsubcontent = document.getElementsByClassName("subsubcontent");
        for (var j = 0; j < allSubsubcontent.length; j++) {
          allSubsubcontent[j].style.display = "none";
        }
        icon.classList.add('fa-minus-circle');
        icon.classList.remove('fa-plus-circle');
        subsubcontent.style.display = "block";
      }
      // Apply the active style to the current button
      this.classList.add('menuhoveractive');
    });
  }
  
  document.getElementById('signOutBtn').addEventListener('click', function() {
    logoutAndRedirect('/QHSLogin');
  });
  
  function logoutAndRedirect(url) {
    window.location.href = url;
  }