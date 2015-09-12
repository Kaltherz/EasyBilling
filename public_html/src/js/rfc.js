var vowels, names;

vowels = ["A","E","I","O","U", "a", "e", "i", "o", "u"];

function removeAccents(str){
	str = str.replace(/\Á|á/g, 'A');
    str = str.replace(/\É|é/g, 'E');
    str = str.replace(/\Í|í/g, 'I');
    str = str.replace(/\Ó|ó/g, 'O');
    str = str.replace(/\Ú|ú/g, 'U');
    str = str.replace(/\Ñ|ñ/g, 'X');
    return str;
}

function convertDate(date){
	//ISO (1990-12-31) to CURP (901231)
	return date[2]+date[3]+date[5]+date[6]+date[8]+date[9];
}

function firstVowel(str){
	var vowel = "X";
	str = str.substring(1, str.length);

	for(var i = 0; i < str.length; i++){
		if($.inArray(str[i], vowels) != -1){
			vowel = str[i];
			break;
		}
	}

	return vowel.toUpperCase();
}

function rfcGenerator(name, lastnamef, lastnamem, birthdate, randkey){
	var rfc = "";

	name = removeAccents(name);
	lastnamef = removeAccents(lastnamef);
	lastnamem = removeAccents(lastnamem);

	rfc = rfc + lastnamef[0];
	rfc = rfc + firstVowel(lastnamef);
	rfc = rfc + lastnamem[0];
	rfc = rfc + name[0];
	rfc = rfc + convertDate(birthdate);
	rfc = rfc + randkey;

	if(curp.length > 14){
		curp = "";
	}

	return rfc;
}