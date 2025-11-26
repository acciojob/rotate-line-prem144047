//your JS code here. If required.
let angle = 0; // Initialize the rotation angle

// Function to rotate the line
function rotateLine() {
    const line = document.getElementById('line');
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to rotate the line every 20 milliseconds
setInterval(rotateLine, 20);