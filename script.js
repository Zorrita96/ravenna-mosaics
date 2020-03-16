function myFunction() {
    var x = document.getElementById("fade-content").style;
    if (x.maxHeight === "70px" || x.maxHeight === "") {
      x.maxHeight = "none";
      document.getElementById('fade-overlay').style.display = "none";
      document.getElementById('show-more-button').innerText = 'Свернуть';
    } else {
      x.maxHeight = "70px";
      document.getElementById('fade-overlay').style.display = "block";
      document.getElementById('show-more-button').innerText = 'Развернуть';
    }
  }