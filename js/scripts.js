$(document).ready(function() {
	$("#formOne").submit(function() {
		event.preventDefault();
		var newString = $("input#inputPhrase").val();
		newString = newString.replace(/[^a-zA-Z1-9]/g,'').toLowerCase();

		var totalElements = newString.length;
		var sqRoot = Math.sqrt(totalElements);
		var columns= Math.floor(sqRoot);
		var rows= Math.floor(sqRoot);

		if (sqRoot%1 === 0) {
			columns = sqRoot;
		  rows = sqRoot;
		} else if (totalElements>((rows+1)*columns)){
      columns = (Math.floor(sqRoot)) + 1;
		  rows = (Math.floor(sqRoot)) + 1;
    } else {
			columns = Math.floor(sqRoot);
		  rows = (Math.floor(sqRoot)) + 1;
		}
// 4 columns 4 rows: abcdefghabcdefgh = "aeaeb fbfcg cgdhd h"

		var normalArray = [];
		var encryptArray = [];
		var letterCount = 0;

		for (var i=0; i < rows; i++) {
			var newArray = [];
		  normalArray[i] = newArray;
		  //normalArray[i] = new Array(rows);

		  for (var j=0; j < columns; j++) {
		    normalArray[i][j] = newString.charAt(letterCount);
		    letterCount++;
		  }
		}

		var elementCount = 0;

		for(var i=0; i < columns; i++) {
			for(var j=0; j < rows; j++) {
		  	encryptArray[elementCount] = normalArray[j][i];
		    elementCount++;
		  }
		}

		//clear out any empty arrays
		for (var i=0; i < encryptArray.length; i++) {
			if (encryptArray[i] === "" ) {
		  	encryptArray.splice(i,1);
		  }
		}

		//add spaces in every fifth element
		for (var i=0; i < encryptArray.length; i++) {
			if ((i+1)%5===0) {
		  	encryptArray[i] = encryptArray[i] + " ";
		  }
		}

		var outputString = encryptArray.toString();
		outputString = outputString.replace(/[,]/g,'');
		//alert(outputString);
		$("#outputPhrase").text(outputString);
		$("#result").show();
	});
});
