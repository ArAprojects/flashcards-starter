const javascriptTrivia = [{
  "id": 1,
  "question": "Which HTML element is used for JavaScript?",
  "answers": ["script", "javascript", "JS"],
  "correctAnswer": "script"
}, {
  "id": 2,
  "question": "Which selector will correctly target an element with an id called 'thing'?",
  "answers": [".getElementById('thing')", ".getElementsByIDs(#thing)", ".targetElementsbyID('thing')"],
  "correctAnswer": ".getElementById('thing')"
}, {
  "id": 3,
  "question": "Where should most JavaScript links go in the HTML file.?",
  "answers": ["top of the <body>", "<main>", "bottom of the <body>"],
  "correctAnswer": "bottom of the <body>"
}, {
  "id": 4,
  "question": "What attribute creates the link between the <script> tag and the actual JavaScript file?",
  "answers": ["src=", "file=", "link="],
  "correctAnswer": "src="
}, {
  "id": 5,
  "question": "True or False: All JavaScript files require a <script> tag inside them.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 6,
  "question": "What is the proper syntax to use JavaScript to create an alert box with a message?",
  "answers": ["alert(Hello World)", "alert('Hello World')", "message('Hello World')"],
  "correctAnswer": "alert('Hello World')"
}, {
  "id": 7,
  "question": "True or False: A function declaration begins with the keyword 'function'.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 8,
  "question": "True or False: A function expression begins with the keyword 'expression'.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 9,
  "question": "True or False: (i == 5) is equivalent to (i === 5)",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 10,
  "question": "Which characters are used to make a multiline comments in a JavaScript file?",
  "answers": ["commas and angle brackets", "two single quote marks", "slashes and asterisks"],
  "correctAnswer": "slashes and asterisks"
}, {
  "id": 11,
  "question": "What qualifies as an object in JavaScript?",
  "answers": ["HTML elements", "arrays and objects", "everything"],
  "correctAnswer": "everything"
}, {
  "id": 12,
  "question": "Which JavaScript method returns a number rounded to its nearest integer?",
  "answers": ["Math.round()", "Math.roundUp()", "Math.rnd()"],
  "correctAnswer": "Math.round()"
}, {
  "id": 13,
  "question": "Which JavaScript method returns the smallest integer higher or equal to a number?",
  "answers": ["Math.ceil(x, y)", "Math.ceiling(x, y)", "Math.roundUp(x, y)"],
  "correctAnswer": "Math.ceil()"
}, {
  "id": 14,
  "question": "Which variable styles is function scoped, and not block scoped??",
  "answers": ["var", "let", "const"],
  "correctAnswer": "var"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What is the name of this character in JavaScript: = ",
  "answers": ["assignment operator", "equivalent operator", "variable assignment"],
  "correctAnswer": "assignment operator"
}, {
  "id": 17,
  "question": "Which characters join to come the 'logical or'?",
  "answers": ["&&", "++", "||"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "Which of the following are truthy?",
  "answers": ["Infinity", "truthy", "boolean"],
  "correctAnswer": "Infinity"
}, {
  "id": 19,
  "question": "Which of the following are falsy?",
  "answers": ["boolean", "(new Date())", "undefined"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "Which paradigm uses objects to model real world things that we want to represent inside our programs?",
  "answers": ["object oriented programming", "function oriented programming"],
  "correctAnswer": "false"
}, {
  "id": 21,
  "question": "What term is used for allowing new objects to take on the data and behavior of their parent classes?",
  "answers": ["requirement", "map()", "inheritance"],
  "correctAnswer": "inheritance"
}, {
  "id": 22,
  "question": "Which is preferred practice in object oriented programming, coupled or decoupled functions?",
  "answers": ["coupled", "decoupled", "parent/child"],
  "correctAnswer": "decoupled"
}, {
  "id": 23,
  "question": "True or False: An array is a data structure that allows us to group related information and behaviors into key-value pairs.",
  "answers": ["true", "object", "false"],
  "correctAnswer": "false"
}, {
  "id": 24,
  "question": "True or False: A class is the template for each instance, and each instance is an object based off of the class template",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "When objects of one class inherit or extends many traits from another class, the inheriting classes are called...",
  "answers": ["sub sandwiches", "child classes", "parent classes"],
  "correctAnswer": "child classes"
}, {
  "id": 26,
  "question": "Which keyword is used to access and invoke methods on a parent class?",
  "answers": ["super", "duper", "this.method"],
  "correctAnswer": "super"
}, {
  "id": 27,
  "question": "What is it called when values are scoped to a specific instance of an object?",
  "answers": ["encapsulation", "decoupling", "separation"],
  "correctAnswer": "encapsulation"
}, {
  "id": 28,
  "question": "Which general problem-solving framework involves working backwards from a desired result?",
  "answers": ["trial and error", "heuristic", "reverse engineer"],
  "correctAnswer": "heuristic"
}, {
  "id": 29,
  "question": "When called on to whiteboard a problem, what should be in your non-dominant hand?",
  "answers": ["a second marker", "a turkey club", "an eraser"],
  "correctAnswer": "eraser"
}, {
  "id": 30,
  "question": "What term is used for the tendency to focus on one particular piece of information when making decisions or problem-solving?",
  "answers": ["anchoring bias", "availability bias", "mental set"],
  "correctAnswer": "anchoring bias"
}]

module.exports = {
  javascriptTrivia
}
