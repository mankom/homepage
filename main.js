console.log('siema');
const name = 'Marek';
const age = 41;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`);
const jsFun = document.querySelector('.aboutMe__paragraph--js');
console.log(jsFun); //wyświetlenie wszystkiego co znajdyje się między znacznikami oznaczonmymi klasą aboutMe__paragraph--js
jsFun.innerHTML = 'Czasem próbuję swoich sił w C#.';
console.log(jsFun.innerHTML);

function helloWorld(name, age) {
	console.log("Witaj " + name + '.');
	switch (age) {
		case age < 10:
			console.log("Pozwól, że będę ci mówił: gówniarzu.");
			break;
		case 18:
			console.log("O, kolega/koleżanka jest pełnoletni/a.");
			break;
		case age < 20:
			console.log("Jesteśmy nastolatkiem. Zazdroszczę, zazdroszczę.");
			break;
		case age < 30:
			console.log("Szczytowa forma.");
			break;
			case 41:
				console.log("Całe życie przed tobą. Głowa do góry.");
				break;
		case age < 40:
			console.log("Zbliżamy się do szczytu, spokojnie później to już z górki, szybko pójdzie.");
			break;
			
		default:
			console.log("Widzę, że długo tu nie zostaniesz.");
			break;
	}
	return age;
}

const welcome = (name, age) => {
	console.log("Witaj ${name}, masz ${age} lat.")
}

console.log(helloWorld('Marek', 41));