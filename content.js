(function() {
  let currentPlaybackRate = parseFloat(localStorage.getItem('videoPlaybackRate')) || 1.0;
  let overlay = null;
  let videos = document.getElementsByTagName('video');

  function adjustPlaybackRate(factor) {
      currentPlaybackRate = Math.max(0, currentPlaybackRate + factor);
      localStorage.setItem('videoPlaybackRate', currentPlaybackRate);
      for (let video of videos) {
        video.playbackRate = currentPlaybackRate;
      }
      showPlaybackRate(currentPlaybackRate);
  }

  function showPlaybackRate(rate) {
    if (overlay) {
        overlay.remove();
    }

    overlay = document.createElement('div');
    overlay.textContent = rate.toFixed(1) + 'x';
    overlay.style.position = 'fixed';
    overlay.style.left = '50%';
    overlay.style.top = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.color = 'white';
    overlay.style.padding = '10px 20px';
    overlay.style.borderRadius = '5px';
    overlay.style.zIndex = '9999';
    overlay.style.fontSize = '24px';
    overlay.style.fontFamily = 'Arial, sans-serif';
    overlay.style.pointerEvents = 'none';
    overlay.style.userSelect = 'none';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.2s';

    document.body.appendChild(overlay);

    // Fade in
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    // Fade out after 1 second
    setTimeout(() => {
        overlay.style.opacity = '0';
        // Remove after transition
        setTimeout(() => {
            if (overlay) {
                overlay.remove();
                overlay = null;
            }
        }, 200);
    }, 1000);
  }

  // Listen for keydown events to adjust speed
  document.addEventListener('keydown', function(e) {
      // Check if Ctrl+Shift+. is pressed
      if (e.ctrlKey && e.shiftKey && (e.key === '.' || e.key === '>')) {
          e.preventDefault();
          adjustPlaybackRate(0.1);
      }
      // Check if Ctrl+Shift+, is pressed
      else if (e.ctrlKey && e.shiftKey && (e.key === ',' || e.key === '<')) {
          e.preventDefault();
          adjustPlaybackRate(-0.1);
      }
  }, false);

  // Listen for 'play' event on video elements to apply playback rate
  document.addEventListener('play', function(e) {
      if (e.target.tagName === 'VIDEO') {
          e.target.playbackRate = currentPlaybackRate;
      }
  }, true); // Use capture phase to catch events earlier

})();
