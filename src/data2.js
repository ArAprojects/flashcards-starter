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
}]

module.exports = {
  javascriptTrivia
}
