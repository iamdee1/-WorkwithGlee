document.addEventListener("DOMContentLoaded", function() {
  var dropdownBtns = document.querySelectorAll('.dropdown-btn');

  dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var dropdown = this.nextElementSibling;
      dropdown.classList.toggle('show');
    });
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener('click', function(e) {
    dropdownBtns.forEach(function(btn) {
      var dropdown = btn.nextElementSibling;
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });
});
