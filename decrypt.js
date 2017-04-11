
// break the encrypted message into its constituent rows
module.exports.toRow = text => text.split(' ');

// unscramble the message into its original order
module.exports.reorder = text => {
	
	// declare the empty string to hold the output
	let output = '';

	// initialize a loop that runs once for each 'column' in the square
	for(let i = 0; i < text[0].length; i++) {

			let word = '';

		// initialize a loop that runs once for each 'row' in the square
		for(let j = 0; j < text.length; j++) {
		
			word += text[j].charAt(i);

		}

	output += word;

	}

	return output;

}

