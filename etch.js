console.log("New script called");

var primaryColor = hexToRgb('#FFFFFF');
var secondaryColor = hexToRgb('#0056b3');

try {
	const container_div = document.querySelector(".container");
	if (! container_div) {
		throw new Error("Container Div Not Found");
	}

	for (let i = 0; i < 16; i++) {
		container_div.appendChild(createSquare(i));
	}

} catch(error) {
	console.log("Initial Setup Failed: " + error.message);
}

function createSquare(id) {
	try {
    const new_div = document.createElement("div");
    new_div.classList.add("div-square");
  
  
    const new_button = document.createElement("button");
    new_button.classList.add("button-square");
    new_button.setAttribute('id', id);

		new_button.addEventListener('mouseenter', () => {
			const bgColor = window.getComputedStyle(new_button).backgroundColor;
			console.log("bgColor is " + bgColor);
			if (bgColor === primaryColor) {
      	new_button.style.backgroundColor = secondaryColor;
			} else {
      	new_button.style.backgroundColor = primaryColor;
			}
		});
  	
    new_div.appendChild(new_button);
  	return new_div;

	} catch (error) {
     console.log("Error in createSquare " + error.message);
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
