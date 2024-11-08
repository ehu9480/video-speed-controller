# Video Speed Controller Extension for Firefox

This Firefox extension allows you to control the playback speed of any video element on a webpage. Use keyboard shortcuts to adjust the speed in increments of 0.1x, with no upper limit.

## Installation

1. Clone this repository or download the files as a ZIP.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click on **"Load Temporary Add-on"**.
4. Select the `manifest.json` file in the extension folder.

## Usage

### Key Bindings
- **Increase Speed**: Press `Ctrl+Shift+.` to increase the speed by 0.1x.
- **Decrease Speed**: Press `Ctrl+Shift+,` to decrease the speed by 0.1x.

### Testing the Extension

1. **Navigate to a Video Page**: Open any website with a video element (e.g., YouTube, Netflix, lecture videos).
2. **Adjust Playback Speed**:
   - Press `Ctrl+Shift+.` to increase the speed.
   - Press `Ctrl+Shift+,` to decrease it.
3. **Observe the Popup**:
   - A popup will appear in the center of the screen, displaying the current playback speed (e.g., 1.1x).
   - The popup fades after 1 second. If you adjust the speed again within that time, the popup updates without stacking.

### Installation for Chrome, Arc, or Other Chromium-Based Browsers

This extension is compatible with Chromium-based browsers (e.g., Chrome, Arc, Edge) without any code modifications. Follow these steps to install:

1. **Open the Extensions Page**:
   - In your browser, navigate to `chrome://extensions/` in the address bar.
   - Enable "Developer mode" by toggling the switch in the upper right corner.

2. **Load the Unpacked Extension**:
   - Click on **Load unpacked**.
   - Select the folder containing `manifest.json` and `content.js`.

3. **Testing the Extension**:
   - Open a webpage with a video element (e.g., YouTube, Netflix).
   - Use `Ctrl+Shift+.` to increase the playback speed or `Ctrl+Shift+,` to decrease it.
   - The overlay should display the current playback speed, and all video elements should adopt the chosen speed.

This will enable the extension in any Chromium-based browser that supports Manifest V3.

## License

This project is open source and available under the MIT License.
