// Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.

// function reverseNumber() {
// 	let number=("4567")
// 	console.log(number.split("").reverse("").join(""))
	

// }reverseNumber()

//Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.

// function orderAlfabetico() {
// 	let palabra=("murcielago algo")
// 	console.log(palabra.split("").sort().join(""))
	

// }orderAlfabetico()

// Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".

// function capitalizar() {
// 	var palabra=("hola mundo")
// 	palabra=palabra.split("")
// 	palabra[0]=palabra[0].toUpperCase()
// 	for (var i = 0; i < palabra.length; i++) {
// 		if (palabra[i]==" ") 
// 		{
// 			palabra[i+1]=palabra[i+1].toUpperCase()
// 		}
// 	}console.log(palabra.join(""))
// } capitalizar()

// Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
// function longWord(){
// 	var frase = ("tres tigres tragaban trigo en un trigal")
// 	var word= ""
// 	frase=frase.split(" ")
// 	word=frase[0]
// 	for (var i = 0; i < frase.length; i++) {
// 		if (word.length < frase[i].length)
// 		{
// 			word=frase[i]
// 		}
// 	}console.log(word)
// }longWord()