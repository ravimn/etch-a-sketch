console.log("New script called");

try {
	const container_div = document.querySelector(".container");
	if (! container_div) {
		throw new Error("Container Div Not Found");
	}

	for (let i = 0; i < 16; i++) {
		const new_div = document.createElement("div");
		new_div.classList.add("div-square");
		const new_button = document.createElement("button");
		new_button.classList.add("button-square");
		new_div.appendChild(new_button);
		container_div.appendChild(new_div);
	}

} catch(error) {
	console.log("Initial Setup Failed: " + error.message);
}




console.log("New script ended");