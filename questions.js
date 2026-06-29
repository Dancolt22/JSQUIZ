// 40 questions covering only: if/else, loops, functions
// Each question: { question, code (optional), options[4], correctIndex, explanation }

const quizQuestions = [
  // ---------- IF / ELSE (1-14) ----------
  {
    question: "What will this code print?",
    code: `let age = 17;\nif (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}`,
    options: ["Adult", "Minor", "undefined", "Nothing, it errors"],
    correctIndex: 1,
    explanation: "17 is not >= 18, so the else block runs and logs 'Minor'."
  },
  {
    question: "What is the output here?",
    code: `let score = 75;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("F");\n}`,
    options: ["A", "B", "C", "F"],
    correctIndex: 2,
    explanation: "75 fails the >=90 and >=80 checks, but passes >=70, so 'C' is logged."
  },
  {
    question: "What does this code log?",
    code: `let x = 0;\nif (x) {\n  console.log("Truthy");\n} else {\n  console.log("Falsy");\n}`,
    options: ["Truthy", "Falsy", "0", "Error"],
    correctIndex: 1,
    explanation: "0 is a falsy value in JavaScript, so the else branch runs."
  },
  {
    question: "What will be printed?",
    code: `let a = 5, b = "5";\nif (a === b) {\n  console.log("Equal");\n} else {\n  console.log("Not Equal");\n}`,
    options: ["Equal", "Not Equal", "true", "false"],
    correctIndex: 1,
    explanation: "=== checks both value and type. 5 (number) and '5' (string) differ in type, so they are not equal."
  },
  {
    question: "What is logged by this snippet?",
    code: `let num = -3;\nif (num > 0 && num < 10) {\n  console.log("In range");\n} else {\n  console.log("Out of range");\n}`,
    options: ["In range", "Out of range", "true", "NaN"],
    correctIndex: 1,
    explanation: "-3 is not greater than 0, so the && condition is false, and the else block runs."
  },
  {
    question: "What does the following code output?",
    code: `let isMember = false;\nlet age = 20;\nif (isMember || age > 18) {\n  console.log("Allowed");\n} else {\n  console.log("Denied");\n}`,
    options: ["Allowed", "Denied", "false", "undefined"],
    correctIndex: 0,
    explanation: "Even though isMember is false, age > 18 is true, and || only needs one true side, so 'Allowed' is logged."
  },
  {
    question: "What is the result of this code?",
    code: `let value = null;\nif (value) {\n  console.log("Has value");\n} else if (value === null) {\n  console.log("Is null");\n} else {\n  console.log("Unknown");\n}`,
    options: ["Has value", "Is null", "Unknown", "Error"],
    correctIndex: 1,
    explanation: "null is falsy so the first if fails, then value === null is true, so 'Is null' is logged."
  },
  {
    question: "What will this nested if/else print?",
    code: `let weather = "rainy";\nlet hasUmbrella = false;\nif (weather === "rainy") {\n  if (hasUmbrella) {\n    console.log("Stay dry");\n  } else {\n    console.log("Get wet");\n  }\n} else {\n  console.log("Enjoy the sun");\n}`,
    options: ["Stay dry", "Get wet", "Enjoy the sun", "Nothing"],
    correctIndex: 1,
    explanation: "weather is 'rainy' so we enter the outer if, then hasUmbrella is false so the inner else runs, logging 'Get wet'."
  },
  {
    question: "What does this ternary expression evaluate to?",
    code: `let temperature = 30;\nlet result = temperature > 25 ? "Hot" : "Cold";\nconsole.log(result);`,
    options: ["Hot", "Cold", "30", "undefined"],
    correctIndex: 0,
    explanation: "The ternary operator checks temperature > 25, which is true (30 > 25), so result becomes 'Hot'."
  },
  {
    question: "What is printed by this switch-like if/else chain?",
    code: `let day = 3;\nif (day === 1) {\n  console.log("Monday");\n} else if (day === 2) {\n  console.log("Tuesday");\n} else if (day === 3) {\n  console.log("Wednesday");\n} else {\n  console.log("Unknown");\n}`,
    options: ["Monday", "Tuesday", "Wednesday", "Unknown"],
    correctIndex: 2,
    explanation: "day equals 3, which matches the third condition, logging 'Wednesday'."
  },
  {
    question: "What does this code output?",
    code: `let x = 10;\nif (x = 5) {\n  console.log("Block ran, x is " + x);\n} else {\n  console.log("Block skipped");\n}`,
    options: ["Block skipped", "Block ran, x is 10", "Block ran, x is 5", "Error: invalid syntax"],
    correctIndex: 2,
    explanation: "This uses a single = (assignment), not ==. It assigns 5 to x and the expression evaluates to 5, which is truthy, so the if runs with x now equal to 5."
  },
  {
    question: "What will be logged?",
    code: `let user = undefined;\nif (!user) {\n  console.log("No user");\n} else {\n  console.log("Welcome, " + user);\n}`,
    options: ["No user", "Welcome, undefined", "Error", "Welcome,"],
    correctIndex: 0,
    explanation: "user is undefined, which is falsy, so !user is true, and 'No user' is logged."
  },
  {
    question: "What is the output of this code?",
    code: `let n = 4;\nif (n % 2 === 0) {\n  if (n % 4 === 0) {\n    console.log("Divisible by 4");\n  } else {\n    console.log("Even but not by 4");\n  }\n} else {\n  console.log("Odd");\n}`,
    options: ["Odd", "Even but not by 4", "Divisible by 4", "undefined"],
    correctIndex: 2,
    explanation: "4 % 2 === 0 is true, then 4 % 4 === 0 is also true, so 'Divisible by 4' is logged."
  },
  {
    question: "What does this code print?",
    code: `let grade = "";\nif (grade) {\n  console.log("Grade set: " + grade);\n} else {\n  console.log("No grade yet");\n}`,
    options: ["Grade set: ", "No grade yet", "Error", "undefined"],
    correctIndex: 1,
    explanation: "An empty string '' is falsy, so the else branch executes, logging 'No grade yet'."
  },

  // ---------- LOOPS (15-28) ----------
  {
    question: "What does this for loop print?",
    code: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
    options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
    correctIndex: 0,
    explanation: "i starts at 0 and runs while i < 3, printing 0, 1, then 2 before stopping."
  },
  {
    question: "How many times does 'Hi' get logged?",
    code: `for (let i = 1; i <= 5; i++) {\n  console.log("Hi");\n}`,
    options: ["4 times", "5 times", "6 times", "Infinite"],
    correctIndex: 1,
    explanation: "i goes from 1 to 5 inclusive (i <= 5), so the loop body runs exactly 5 times."
  },
  {
    question: "What is the final value logged after this loop?",
    code: `let total = 0;\nfor (let i = 1; i <= 4; i++) {\n  total += i;\n}\nconsole.log(total);`,
    options: ["10", "6", "4", "8"],
    correctIndex: 0,
    explanation: "The loop adds 1+2+3+4, which sums to 10."
  },
  {
    question: "What will this while loop print?",
    code: `let i = 5;\nwhile (i > 0) {\n  console.log(i);\n  i--;\n}`,
    options: ["5 4 3 2 1", "1 2 3 4 5", "5 4 3 2 1 0", "Infinite loop"],
    correctIndex: 0,
    explanation: "i starts at 5 and decreases until it's no longer greater than 0, printing 5, 4, 3, 2, 1."
  },
  {
    question: "What does this do-while loop output?",
    code: `let count = 0;\ndo {\n  console.log(count);\n  count++;\n} while (count < 3);`,
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Nothing, condition fails first"],
    correctIndex: 0,
    explanation: "A do-while always runs the body at least once before checking the condition, printing 0, 1, then 2."
  },
  {
    question: "What is logged by this loop using 'continue'?",
    code: `for (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) {\n    continue;\n  }\n  console.log(i);\n}`,
    options: ["1 2 3 4 5", "1 3 5", "2 4", "5 3 1"],
    correctIndex: 1,
    explanation: "continue skips even numbers (2 and 4), so only the odd numbers 1, 3, and 5 are logged."
  },
  {
    question: "What does this loop print before stopping?",
    code: `for (let i = 0; i < 10; i++) {\n  if (i === 4) {\n    break;\n  }\n  console.log(i);\n}`,
    options: ["0 1 2 3", "0 1 2 3 4", "0 1 2 3 4 5", "Nothing"],
    correctIndex: 0,
    explanation: "break exits the loop the moment i equals 4, so only 0, 1, 2, and 3 are printed before that."
  },
  {
    question: "What is the output of this nested loop?",
    code: `for (let i = 1; i <= 2; i++) {\n  for (let j = 1; j <= 2; j++) {\n    console.log(i + "-" + j);\n  }\n}`,
    options: [
      "1-1, 1-2, 2-1, 2-2",
      "1-1, 2-2",
      "1-1, 1-2",
      "1-1, 2-1, 1-2, 2-2"
    ],
    correctIndex: 0,
    explanation: "For each value of i (1, then 2), the inner loop runs fully through j (1, then 2), giving 1-1, 1-2, 2-1, 2-2."
  },
  {
    question: "How many times will the loop body execute?",
    code: `let i = 0;\nwhile (i < 5) {\n  i += 2;\n}`,
    options: ["2 times", "3 times", "5 times", "Infinite loop"],
    correctIndex: 1,
    explanation: "i goes 0 -> 2 -> 4 -> 6, and the check happens before each run: 0<5 true, 2<5 true, 4<5 true, 6<5 false. That's 3 executions."
  },
  {
    question: "What array does this loop produce when logged?",
    code: `let result = [];\nfor (let i = 0; i < 4; i++) {\n  result.push(i * 2);\n}\nconsole.log(result);`,
    options: ["[0, 2, 4, 6]", "[2, 4, 6, 8]", "[0, 1, 2, 3]", "[1, 2, 3, 4]"],
    correctIndex: 0,
    explanation: "For i = 0,1,2,3 the pushed values are i*2: 0, 2, 4, and 6."
  },
  {
    question: "What does this for...of loop log?",
    code: `let fruits = ["mango", "pawpaw", "guava"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}`,
    options: [
      "mango pawpaw guava",
      "0 1 2",
      "[mango, pawpaw, guava]",
      "guava pawpaw mango"
    ],
    correctIndex: 0,
    explanation: "for...of iterates over the values of the array in order, logging each fruit name in sequence."
  },
  {
    question: "What is wrong with this loop (assuming i should count up)?",
    code: `for (let i = 0; i < 5; i--) {\n  console.log(i);\n}`,
    options: [
      "Nothing, it prints 0 to 4 normally",
      "It causes an infinite loop because i never reaches 5",
      "It throws a syntax error",
      "It prints 5 4 3 2 1"
    ],
    correctIndex: 1,
    explanation: "i-- decreases i every iteration, so i will never reach 5; the condition i < 5 stays true forever, causing an infinite loop."
  },
  {
    question: "What will this loop log on each pass?",
    code: `for (let i = 10; i >= 0; i -= 5) {\n  console.log(i);\n}`,
    options: ["10 5 0", "10 5 0 -5", "0 5 10", "10 0"],
    correctIndex: 0,
    explanation: "Starting at 10 and subtracting 5 each time while i >= 0: 10, then 5, then 0; subtracting again gives -5 which fails the condition."
  },
  {
    question: "What does this loop with a nested if log?",
    code: `for (let i = 1; i <= 6; i++) {\n  if (i % 3 === 0) {\n    console.log(i + " is divisible by 3");\n  }\n}`,
    options: [
      "3 is divisible by 3, 6 is divisible by 3",
      "1 2 3 4 5 6",
      "3 is divisible by 3",
      "Nothing is logged"
    ],
    correctIndex: 0,
    explanation: "Only when i % 3 === 0 does the log run, which happens at i = 3 and i = 6."
  },

  // ---------- FUNCTIONS (29-40) ----------
  {
    question: "What does calling this function log?",
    code: `function greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Daniel"));`,
    options: ["Hello, Daniel", "greet(name)", "undefined", "Hello, name"],
    correctIndex: 0,
    explanation: "The function returns the string 'Hello, ' concatenated with the argument passed, which is 'Daniel'."
  },
  {
    question: "What is logged here?",
    code: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));`,
    options: ["7", "34", "NaN", "undefined"],
    correctIndex: 0,
    explanation: "add(3, 4) returns 3 + 4, which is 7."
  },
  {
    question: "What does this function call print?",
    code: `function square(n) {\n  console.log(n * n);\n}\nsquare(5);`,
    options: ["25", "10", "5", "undefined"],
    correctIndex: 0,
    explanation: "The function logs n * n directly inside its body. With n = 5, that's 5 * 5 = 25."
  },
  {
    question: "What happens when this function is called without an argument?",
    code: `function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(5));`,
    options: ["NaN", "5", "0", "Error: missing argument"],
    correctIndex: 0,
    explanation: "b is undefined since no second argument was passed. 5 * undefined evaluates to NaN."
  },
  {
    question: "What is the output of this code using a default parameter?",
    code: `function greet(name = "Guest") {\n  return "Welcome, " + name;\n}\nconsole.log(greet());`,
    options: ["Welcome, Guest", "Welcome, undefined", "Welcome,", "Error"],
    correctIndex: 0,
    explanation: "Since no argument is passed, name falls back to its default value 'Guest'."
  },
  {
    question: "What does this arrow function log when called?",
    code: `const double = (x) => x * 2;\nconsole.log(double(7));`,
    options: ["14", "7", "49", "undefined"],
    correctIndex: 0,
    explanation: "The arrow function implicitly returns x * 2. With x = 7, that's 14."
  },
  {
    question: "What is logged by this code involving a function with a loop inside it?",
    code: `function sumUpTo(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i++) {\n    total += i;\n  }\n  return total;\n}\nconsole.log(sumUpTo(4));`,
    options: ["10", "4", "6", "undefined"],
    correctIndex: 0,
    explanation: "The function sums 1+2+3+4 inside the loop, returning 10."
  },
  {
    question: "What does this function return, and what gets logged?",
    code: `function isEven(num) {\n  if (num % 2 === 0) {\n    return true;\n  } else {\n    return false;\n  }\n}\nconsole.log(isEven(9));`,
    options: ["false", "true", "9", "undefined"],
    correctIndex: 0,
    explanation: "9 % 2 is 1, not 0, so the else branch runs and the function returns false."
  },
  {
    question: "What is logged after this function call?",
    code: `function logMessage() {\n  console.log("Inside function");\n}\nconsole.log("Before call");\nlogMessage();\nconsole.log("After call");`,
    options: [
      "Before call, Inside function, After call",
      "Inside function, Before call, After call",
      "Before call, After call, Inside function",
      "Inside function only"
    ],
    correctIndex: 0,
    explanation: "Code runs top to bottom: 'Before call' logs first, then logMessage() runs and logs 'Inside function', then 'After call' logs last."
  },
  {
    question: "What does this function log, considering variable scope?",
    code: `function outer() {\n  let count = 1;\n  function inner() {\n    count++;\n    console.log(count);\n  }\n  inner();\n}\nouter();`,
    options: ["2", "1", "undefined", "Error: count is not defined"],
    correctIndex: 0,
    explanation: "inner() can access count from its enclosing function outer() due to closures, increments it to 2, and logs it."
  },
  {
    question: "What is printed by this recursive function?",
    code: `function countDown(n) {\n  if (n <= 0) {\n    console.log("Done");\n    return;\n  }\n  console.log(n);\n  countDown(n - 1);\n}\ncountDown(3);`,
    options: [
      "3, 2, 1, Done",
      "3, 2, 1, 0, Done",
      "1, 2, 3, Done",
      "Done"
    ],
    correctIndex: 0,
    explanation: "The function logs n, then calls itself with n-1, repeating until n <= 0: it logs 3, then 2, then 1, then finally 'Done'."
  },
  {
    question: "What does this function return when called with these arguments?",
    code: `function max(a, b) {\n  if (a > b) {\n    return a;\n  } else {\n    return b;\n  }\n}\nconsole.log(max(8, 15));`,
    options: ["15", "8", "true", "undefined"],
    correctIndex: 0,
    explanation: "8 > 15 is false, so the else branch returns b, which is 15."
  }
];
