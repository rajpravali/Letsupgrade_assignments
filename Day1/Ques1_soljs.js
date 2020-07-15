//methods in console function
console.log("This is console log");
//.log--->logs the text on console
console.warn("Lets throw a warning");
//.warn--->displays a warning
console.error("Lets display an error");
//.error--->throws an error 
console.assert(true, "%s", "Hello There!!!!I AM ALWAYS TRUE");
//.assert--->used to test the passed argumment is true or false in value
console.count('Hello There!!!');
console.count('Hello There!!!');
//.count--->counts the number of times "Hello There" has been logged.
console.countReset("Hello There!!!");
console.count("Hello There!!!");
//.countreset--->resets the counting back to 1
console.group("Welcome");
console.log("HELLO!!!")
console.log("This is ")
console.log("Group")
console.groupEnd();
//.group and .groupend--->create and ends a group of logs to console
const data = [
	{ Name: 'Raj', Languages: 'Python' },
	{ Name: 'Ram', Languages: 'Java' }
];
console.table(data);
//.data--->describe an object or array content in human- friendly table
