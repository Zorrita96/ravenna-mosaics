function showMore1() {
    var x = document.getElementById("fade-content-1").style;
    if (x.maxHeight === "70px" || x.maxHeight === "") {
      x.maxHeight = "none";
      document.getElementById('fade-overlay-1').style.display = "none";
      document.getElementById('show-more-button-1').innerText = 'Свернуть';
    } else {
      x.maxHeight = "70px";
      document.getElementById('fade-overlay-1').style.display = "block";
      document.getElementById('show-more-button-1').innerText = 'Развернуть';
    }
  }

function showMore2() {
  var x = document.getElementById("fade-content-2").style;
  if (x.maxHeight === "70px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-2').style.display = "none";
    document.getElementById('show-more-button-2').innerText = 'Свернуть';
  } else {
    x.maxHeight = "70px";
    document.getElementById('fade-overlay-2').style.display = "block";
    document.getElementById('show-more-button-2').innerText = 'Развернуть';
  }
}

function showMore3() {
  var x = document.getElementById("fade-content-3").style;
  if (x.maxHeight === "70px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-3').style.display = "none";
    document.getElementById('show-more-button-3').innerText = 'Свернуть';
  } else {
    x.maxHeight = "70px";
    document.getElementById('fade-overlay-3').style.display = "block";
    document.getElementById('show-more-button-3').innerText = 'Развернуть';
  }
}

function showMore4() {
  var x = document.getElementById("fade-content-4").style;
  if (x.maxHeight === "70px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-4').style.display = "none";
    document.getElementById('show-more-button-4').innerText = 'Свернуть';
  } else {
    x.maxHeight = "70px";
    document.getElementById('fade-overlay-4').style.display = "block";
    document.getElementById('show-more-button-4').innerText = 'Развернуть';
  }
}