var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  // document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
  // document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

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
    .set("#cta", { opacity: 0, force3D: true })
    .set("#image1", { x: -37, y: 35, scale: 1.45 })



  // // ----------Frame 1 ------------
  tl.addLabel("frame1", "1")
    .to("#image1", 1.5, { x: 0, y: 0, scale: 1, ease: Quad.easeInOut }, "frame1+=0.5")

  tl.addLabel("frame2", "3")
    .to('#cta', 0.6, { opacity: 1, ease: Power2.easeInOut })
}
