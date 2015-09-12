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

function firstConsonant(str){
	var consonant = "X";
	str = str.substring(1, str.length);

	for(var i = 0; i < str.length; i++){
		if($.inArray(str[i], vowels) == -1){
			consonant = str[i];
			break;
		}
	}

	return consonant.toUpperCase();
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

function stateCode(state){
	var code = "";
	switch(state){
		case "Aguascalientes": code = "AS"; break;
		case "Baja California": code = "BC"; break;
		case "Baja California Sur": code = "BS"; break;
		case "Campeche": code = "CC"; break;
		case "Chiapas": code = "CS"; break;
		case "Chihuahua": code = "CH"; break;
		case "Coahuila": code = "CL"; break;
		case "Colima": code = "CM"; break;
		case "Distrito Federal": code = "DF"; break;
		case "Durango": code = "DG"; break;
		case "Guanajuato": code = "GT"; break;
		case "Guerrero": code = "GR"; break;
		case "Hidalgo": code = "HG"; break;
		case "Jalisco": code = "JC"; break;
		case "Mexico": code = "MC"; break;
		case "Michoacan": code = "MN"; break;
		case "Morelos": code = "MS"; break;
		case "Nayarit": code = "NT"; break;
		case "Nuevo Leon": code = "NL"; break;
		case "Oaxaca": code = "OC"; break;
		case "Puebla": code = "PL"; break;
		case "Queretaro": code = "QT"; break;
		case "Quintana Roo": code = "QR"; break;
		case "San Luis Potosi": code = "SP"; break;
		case "Sinaloa": code = "SL"; break;
		case "Sonora": code = "SR"; break;
		case "Tabasco": code = "TC"; break;
		case "Tamaulipas": code = "TS"; break;
		case "Tlaxcala": code = "TL"; break;
		case "Veracruz": code = "VZ"; break;
		case "Yucatán": code = "YN"; break;
		case "Zacatecas": code = "ZS"; break;
		default: code = "NE"
	}
	return code;
}

function curpGenerator(name, lastnamef, lastnamem, birthdate, gender, state, randkey){
	var curp = "";

	name = removeAccents(name);
	lastnamef = removeAccents(lastnamef);
	lastnamem = removeAccents(lastnamem);

	curp = curp + lastnamef[0];
	curp = curp + firstVowel(lastnamef);
	curp = curp + lastnamem[0];
	curp = curp + name[0];
	curp = curp + convertDate(birthdate);
	curp = curp + gender;
	curp = curp + stateCode(state);
	curp = curp + firstConsonant(lastnamef);
	curp = curp + firstConsonant(lastnamem);
	curp = curp + firstConsonant(name);
	curp = curp + randkey;

	if(curp.length != 18){
		curp = "";
	}

	return curp;
}