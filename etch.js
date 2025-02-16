console.log("New script called");


reset('#FFFFFF', '#0056b3', 16, 960);

function reset(primaryColor, secondaryColor, numSquares, containerSize) {
	primaryColor = hexToRgb(primaryColor);
	secondaryColor = hexToRgb(secondaryColor);
	console.log("reset::Number of Squares is " + numSquares);
	console.log("reset::primaryColor is " + primaryColor);
	console.log("reset::secondaryColor is " + secondaryColor);
	generateContainer(numSquares, containerSize, primaryColor, secondaryColor);
}

function generateContainer(numSquares, containerSize, primaryColor, secondaryColor) {
	try {
		const container_div = document.querySelector(".container");
		if (! container_div) {
			throw new Error("Container Div Not Found");
		}
		container_div.replaceChildren();

		px = containerSize / numSquares;
		console.log("reset::pixel size " + px);
	
		
		for (let i = 0; i < numSquares**2; i++) {
			container_div.appendChild(createSquare(i, px, primaryColor, secondaryColor));
		}
	
	} catch(error) {
		console.log("Initial Setup Failed: " + error.message);
	}
}

function createSquare(id, px, primaryColor, secondaryColor) {
	try {
		const new_div = document.createElement("div");
		new_div.classList.add("div-square");
		new_div.style.width = px + 'px';
		new_div.style.height = px + 'px';
		new_div.style.backgroundColor = primaryColor;
		new_div.addEventListener('mouseenter', () => changeColor(new_div, primaryColor, secondaryColor));
		return new_div;
	} catch (error) {
		console.log("Error in createSquare " + error.message);
	}
}

function changeColor(new_div, prim, sec) {
	const bgColor = window.getComputedStyle(new_div).backgroundColor;
	//console.log("bgColor is " + bgColor + " primary is " + prim);
	if (bgColor === prim) {
		new_div.style.backgroundColor = sec;
	} else {
		new_div.style.backgroundColor = prim;
	}
}

function hexToRgb(hex) {
    // Remove the hash if present
    hex = hex.replace(/^#/, '');
    
    // Convert shorthand hex (e.g., #fff) to full form (e.g., #ffffff)
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    // Parse the hex values into RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log("New script ended");
