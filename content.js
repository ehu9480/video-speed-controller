(function() {
  let overlay = null;

  function adjustPlaybackRate(factor) {
      let videos = document.getElementsByTagName('video');
      for (let video of videos) {
          video.playbackRate = Math.max(0, video.playbackRate + factor);
          showPlaybackRate(video.playbackRate);
      }
  }

  function showPlaybackRate(rate) {
      // Remove existing overlay if present
      if (overlay) {
          overlay.remove();
      }

      // Create a new overlay element
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

      // Append the overlay to the body
      document.body.appendChild(overlay);

      // Remove the overlay after 1 second
      setTimeout(() => {
          if (overlay) {
              overlay.remove();
              overlay = null;
          }
      }, 1000);
  }

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
})();
