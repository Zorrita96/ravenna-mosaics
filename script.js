function myFunction() {
    var x = document.getElementById("hidden-description");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('show-more-btn').innerText = 'Развернуть';
    } else {
      x.style.display = "none";
      document.getElementById('show-more-btn').innerText = 'Свернуть';
    }
  }