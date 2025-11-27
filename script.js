let angle = 0;

function rotateLine() {
	const line1 = document.getElementById('line');

	angle += 2;

	line1.style.transform = `rotate(${angle})`;
	
}

setInterval(rotateLine, 20);