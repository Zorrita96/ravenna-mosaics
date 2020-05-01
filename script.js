// Find all the .lecture-block <divs>
const lectureBlocks = document.querySelectorAll(".lecture-block");
let lectureBlock;

// Loop through them... 
for (lectureBlock of lectureBlocks) {
  let date = lectureBlock.getElementsByClassName("date")[0];
  
  // ... checking if each has an empty <date> 
  if (date.textContent.includes('past')) {
    
    // If it does, add to to the <span> the class .lecture-block--empty
    lectureBlock.classList.add("lecture-block--empty");}
  }

/*=============================
         VIDEO LIGHTBOX
=============================*/
  
  function lightbox_open1() {
    if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById('video_wrapper-1').style.display = 'block';
      document.getElementById('video_overlay-1').style.display = 'none';
    }
    else {
    let lightBoxVideo = document.getElementById("video-1"); 
    document.getElementById('light-1').style.display = 'block';
    document.getElementById('fade-1').style.display = 'block';
    lightBoxVideo.play();
    }
  }

  function lightbox_close1() {
    let lightBoxVideo = document.getElementById("video-1");
    document.getElementById('light-1').style.display = 'none';
    document.getElementById('fade-1').style.display = 'none';
    lightBoxVideo.pause();
  }

  function lightbox_open2() {
    if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById('video_wrapper-2').style.display = 'block';
      document.getElementById('video_overlay-2').style.display = 'none';
    }
    else {
    let lightBoxVideo = document.getElementById("video-2"); 
    document.getElementById('light-2').style.display = 'block';
    document.getElementById('fade-2').style.display = 'block';
    lightBoxVideo.play();
    }
  }

  function lightbox_close2() {
    let lightBoxVideo = document.getElementById("video-2");
    document.getElementById('light-2').style.display = 'none';
    document.getElementById('fade-2').style.display = 'none';
    lightBoxVideo.pause();
  }

  function lightbox_open3() {
    if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById('video_wrapper-3').style.display = 'block';
      document.getElementById('video_overlay-3').style.display = 'none';
    }
    else {
    let lightBoxVideo = document.getElementById("video-3"); 
    document.getElementById('light-3').style.display = 'block';
    document.getElementById('fade-3').style.display = 'block';
    lightBoxVideo.play();
    }
  }
  
  function lightbox_close3() {
    let lightBoxVideo = document.getElementById("video-3");
    document.getElementById('light-3').style.display = 'none';
    document.getElementById('fade-3').style.display = 'none';
    lightBoxVideo.pause();
  }

/*=============================
       SHOW MORE BUTTONS
=============================*/

function showMore1() {
    let x = document.getElementById("fade-content-1").style;
    if (x.maxHeight === "65px" || x.maxHeight === "") {
      x.maxHeight = "none";
      document.getElementById('fade-overlay-1').style.display = "none";
      document.getElementById('show-more-button-1').innerText = 'Свернуть';
    } else {
      x.maxHeight = "65px";
      document.getElementById('fade-overlay-1').style.display = "block";
      document.getElementById('show-more-button-1').innerText = 'Развернуть';
    }
  }

function showMore2() {
  let x = document.getElementById("fade-content-2").style;
  if (x.maxHeight === "65px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-2').style.display = "none";
    document.getElementById('show-more-button-2').innerText = 'Свернуть';
  } else {
    x.maxHeight = "65px";
    document.getElementById('fade-overlay-2').style.display = "block";
    document.getElementById('show-more-button-2').innerText = 'Развернуть';
  }
}

function showMore3() {
  let x = document.getElementById("fade-content-3").style;
  if (x.maxHeight === "65px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-3').style.display = "none";
    document.getElementById('show-more-button-3').innerText = 'Свернуть';
  } else {
    x.maxHeight = "65px";
    document.getElementById('fade-overlay-3').style.display = "block";
    document.getElementById('show-more-button-3').innerText = 'Развернуть';
  }
}

function showMore4() {
  let x = document.getElementById("fade-content-4").style;
  if (x.maxHeight === "65px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-4').style.display = "none";
    document.getElementById('show-more-button-4').innerText = 'Свернуть';
  } else {
    x.maxHeight = "65px";
    document.getElementById('fade-overlay-4').style.display = "block";
    document.getElementById('show-more-button-4').innerText = 'Развернуть';
  }
}

function showMore5() {
  let x = document.getElementById("fade-content-5").style;
  if (x.maxHeight === "65px" || x.maxHeight === "") {
    x.maxHeight = "none";
    document.getElementById('fade-overlay-5').style.display = "none";
    document.getElementById('show-more-button-5').innerText = 'Свернуть';
  } else {
    x.maxHeight = "65px";
    document.getElementById('fade-overlay-5').style.display = "block";
    document.getElementById('show-more-button-5').innerText = 'Развернуть';
  }
}