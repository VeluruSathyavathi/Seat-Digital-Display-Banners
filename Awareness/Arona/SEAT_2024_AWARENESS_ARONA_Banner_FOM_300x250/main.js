var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {


  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#image1,#cta", { opacity: 0, force3D: true })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#image1', 1, { opacity: 1, ease: Power1.easeInOut }, "frame1+=1.5")

  tl.addLabel("frame2", "4")
    .to('#logo', 0, { opacity: 0, ease: Power4.easeInOut }, "frame2")
    .to('#image1', 1, { opacity: 0, ease: Power1.easeInOut }, "frame2+=0")
    .to('#logo', 0.5, { opacity: 1, ease: Power2.easeInOut }, "frame2+=0.6")
    .to('#cta', 0.6, { opacity: 1, ease: Power2.easeInOut }, "frame2+=1.2")


}
