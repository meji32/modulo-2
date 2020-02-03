//Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop. 

// var i
// var list = ["Elias","Ezequiel","José","NicoFresco","Gian","Meji","Agustín","Nico","Teo","Eli","Lucio","Iván","Diego","Alan","Ariel","Lean","Nahuel1","Lucas","Román","Rocío","LucasGallardo","Nahuel2","Gabi","Edu","Matías","Rodri","Branco"]
// list.sort()
// console.log(list[0])
// console.log(list[list.length-1])

// for (var i = 0; i <= list.length-1; i++) 
// {
// 	console.log(list[i])
// }

//Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.

// var i
// var list = [ {name:"Elias", age:20}, {name:"Ezequiel", age:21}, {name:"José", age:20}, {name:"NicoFresco", age:20}, {name:"Gian", age:23}, {name:"Meji", age:20}, {name:"Agustín", age:20}, {name:"Nico", age:20}, {name:"Teo", age:19}, {name:"Eli", age:22}, {name:"Lucio", age:20}, {name:"Iván", age:19}, {name:"Diego", age:23}, {name:"Alan", age:20}, {name:"Ariel", age:24}, {name:"Lean", age:20}, {name:"Nahuel1", age:20}, {name:"Lucas", age:23}, {name:"Román", age:23}, {name:"Rocío", age:18}, {name:"LucasGallardo", age:20}, {name:"Nahuel2", age:20}, {name:"Gabi", age:22}, {name:"Edu", age:20}, {name:"Matías", age:20}, {name:"Rodri", age:26}, {name:"Branco", age:23}]

// for (i = 0; i<list.length; i++) 
// 	{
// 		if (list[i].age%2==0) 
// 			{
// 				console.log(list[i].age)
// 			}
// 	}	

//Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.

// var numbers = [1,102,103,104]
// var variable = numbers[2]
// function lowestNumber(numbers) 
// { 
// 	for (var i = 0; i < numbers.length ; i++) 
// 		{
// 			if (numbers[i]<variable) 
// 			{
// 				variable=numbers[i]
// 			}
// 		}
// console.log(variable)
// }	
// lowestNumber(numbers)

// Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.


// var numbers = [1,102,103,104]
// var variable = numbers[2]
// function biggestNumber(numbers) 
// { 
// 	for (var i = 0; i < numbers.length ; i++) 
// 		{
// 			if (numbers[i]>variable) 
// 			{
// 				variable=numbers[i]
// 			}
// 		}
// console.log(variable)
// }	
// biggestNumber(numbers)

// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.

// var array = [1,2,53,4,5,6,7,8,9,10]
// var index = 2
// function one_based(array,index) 
// {
// 	console.log(array[index])
// }	
// one_based(array,index)

// Exercise 6: Write a function which receives an array and only prints the values that repeat.  

// var array = [4,2,3,1,5,1,3,5,7,0,7,7]

// function numberRepeted(array) {
// 	let numerosRepetidos = []
// 	let variableComparada
	

// 	for (var i = 0; i < array.length; i++) {
		
// 		variableComparada=array[i]
		
// 		for (var j = i+1; j < array.length; j++){
		
		

// 			if (variableComparada==array[j]) {
// 		band=0
// 				for (var k = 0; k < numerosRepetidos.length; k++) {
					
// 					if (variableComparada==numerosRepetidos[k]) {band++}
				
// 				}

// 				if(band==0)
// 						{
// 						numerosRepetidos.push(variableComparada)
// 						}
					
// 			}
// 		}
// 	}console.log(numerosRepetidos)
// }numberRepeted(array)

// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 

// var myColor = ["Red", "Green", "White", "Black"];

// function colors(myColor) {
// 	console.log( '"' + myColor.join('", "') + '"' )
=======
//Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop. 

// var i
// var list = ["Elias","Ezequiel","José","NicoFresco","Gian","Meji","Agustín","Nico","Teo","Eli","Lucio","Iván","Diego","Alan","Ariel","Lean","Nahuel1","Lucas","Román","Rocío","LucasGallardo","Nahuel2","Gabi","Edu","Matías","Rodri","Branco"]
// list.sort()
// console.log(list[0])
// console.log(list[list.length-1])

// for (var i = 0; i <= list.length-1; i++) 
// {
// 	console.log(list[i])
// }

//Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.

// var i
// var list = [ {name:"Elias", age:20}, {name:"Ezequiel", age:21}, {name:"José", age:20}, {name:"NicoFresco", age:20}, {name:"Gian", age:23}, {name:"Meji", age:20}, {name:"Agustín", age:20}, {name:"Nico", age:20}, {name:"Teo", age:19}, {name:"Eli", age:22}, {name:"Lucio", age:20}, {name:"Iván", age:19}, {name:"Diego", age:23}, {name:"Alan", age:20}, {name:"Ariel", age:24}, {name:"Lean", age:20}, {name:"Nahuel1", age:20}, {name:"Lucas", age:23}, {name:"Román", age:23}, {name:"Rocío", age:18}, {name:"LucasGallardo", age:20}, {name:"Nahuel2", age:20}, {name:"Gabi", age:22}, {name:"Edu", age:20}, {name:"Matías", age:20}, {name:"Rodri", age:26}, {name:"Branco", age:23}]

// for (i = 0; i<list.length; i++) 
// 	{
// 		if (list[i].age%2==0) 
// 			{
// 				console.log(list[i].age)
// 			}
// 	}	

//Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.

// var numbers = [1,102,103,104]
// var variable = numbers[2]
// function lowestNumber(numbers) 
// { 
// 	for (var i = 0; i < numbers.length ; i++) 
// 		{
// 			if (numbers[i]<variable) 
// 			{
// 				variable=numbers[i]
// 			}
// 		}
// console.log(variable)
// }	
// lowestNumber(numbers)

// Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.


// var numbers = [1,102,103,104]
// var variable = numbers[2]
// function biggestNumber(numbers) 
// { 
// 	for (var i = 0; i < numbers.length ; i++) 
// 		{
// 			if (numbers[i]>variable) 
// 			{
// 				variable=numbers[i]
// 			}
// 		}
// console.log(variable)
// }	
// biggestNumber(numbers)

// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.

// var array = [1,2,53,4,5,6,7,8,9,10]
// var index = 2
// function one_based(array,index) 
// {
// 	console.log(array[index])
// }	
// one_based(array,index)

// Exercise 6: Write a function which receives an array and only prints the values that repeat.  

// var array = [4,2,3,1,5,1,3,5,7,0,7,7]

// function numberRepeted(array) {
// 	let numerosRepetidos = []
// 	let variableComparada
	

// 	for (var i = 0; i < array.length; i++) {
		
// 		variableComparada=array[i]
		
// 		for (var j = i+1; j < array.length; j++){
		
		

// 			if (variableComparada==array[j]) {
// 		band=0
// 				for (var k = 0; k < numerosRepetidos.length; k++) {
					
// 					if (variableComparada==numerosRepetidos[k]) {band++}
				
// 				}

// 				if(band==0)
// 						{
// 						numerosRepetidos.push(variableComparada)
// 						}
					
// 			}
// 		}
// 	}console.log(numerosRepetidos)
// }numberRepeted(array)

// Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 

// var myColor = ["Red", "Green", "White", "Black"];

// function colors(myColor) {
// 	console.log( '"' + myColor.join('", "') + '"' )
// }colors( myColor )