let angle = 0;

function rotateLine() {
	const line = document.getElementById('line');
	const line1 = document.getElementById('line1');
	
	angle += 2;
	line.style.transform = `rotate(${angle}deg)`;
	line1.style.transform = `rotate(${angle}deg)`;	
	
}

setInterval(rotateLine, 20);