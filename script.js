const questions = [
    { q: "What is the primary function of the CPU in a computer system?", a: "b", options: ["Storing data", "Fetching, decoding, and executing instructions", "Providing power", "Managing network connections"] },
    { q: "What is the primary function of the CPU in a computer system?", a: "b", options: ["To store data", "To execute instructions", "To manage memory", "To control input/output operations"] },
    { q: "Which of the following is a non-volatile memory?", a: "c", options: ["RAM", "Cache", "ROM", "Register"] },
    { q: "In which type of memory does the CPU store data temporarily while processing tasks?", a: "a", options: ["RAM", "ROM", "Hard Drive", "Flash Drive"] },
    { q: "What is the primary purpose of an operating system?", a: "d", options: ["To manage files", "To provide security", "To compile programs", "To manage hardware resources and software applications"] },
    { q: "Which of the following data structures is used for implementing recursion?", a: "b", options: ["Queue", "Stack", "Linked List", "Array"] },
    { q: "What does the acronym 'DBMS' stand for?", a: "c", options: ["Database Managed System", "Data Backup Management System", "Database Management System", "Data Management System"] },
    { q: "Which data structure is used to implement a priority queue?", a: "a", options: ["Heap", "Queue", "Stack", "Array"] },
    { q: "Which sorting algorithm has the best average-case performance?", a: "b", options: ["Selection Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"] },
    { q: "What is the time complexity of binary search in a sorted array?", a: "b", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"] },
    { q: "What is the purpose of the 'else' clause in a decision control structure?", a: "b", options: ["It executes when the 'if' condition is true", "It executes when the 'if' condition is false", "It repeats the code", "It ends the program"] },
    { q: "Which type of loop continues until a specified condition is false?", a: "a", options: ["While loop", "For loop", "Do-while loop", "Infinite loop"] },
    { q: "What is the key characteristic of a stack data structure?", a: "b", options: ["First-In-First-Out", "Last-In-First-Out", "Random Access", "Circular Structure"] },
    { q: "Which data structure is typically used for breadth-first search in graphs?", a: "a", options: ["Queue", "Stack", "Tree", "Heap"] },
    { q: "What is the main advantage of a linked list over an array?", a: "b", options: ["Faster access to elements", "Easier insertion and deletion", "Fixed size", "Faster sorting"] },
    { q: "In a binary tree, what is the node at the very top called?", a: "c", options: ["Leaf node", "Parent node", "Root node", "Sibling node"] },
    { q: "Which of the following is a primary characteristic of a binary search tree?", a: "d", options: ["Every node has two children", "Nodes are arranged in a heap", "It cannot be balanced", "Left child is less than the parent, and right child is greater"] },
    { q: "Which of the following is an example of a file extension?", a: "c", options: [".exe", ".doc", ".txt", ".java"] },
    { q: "What is the purpose of a database index?", a: "d", options: ["To manage relationships", "To define primary keys", "To store data sequentially", "To speed up data retrieval"] },
    { q: "Which of the following is a characteristic of an algorithm?", a: "c", options: ["Infinite execution", "Ambiguity", "Finiteness", "Inconsistent results"] },
    { q: "What is a queue primarily used for?", a: "b", options: ["Reversing a string", "Task scheduling", "Undo functionality", "Sorting elements"] },
    { q: "Which of the following represents a valid binary number?", a: "a", options: ["101011", "23567", "ABCD", "198"] },
    { q: "What is the purpose of a 'for' loop?", a: "b", options: ["To store variables", "To repeat a block of code a specific number of times", "To perform conditional operations", "To define functions"] },
    { q: "Which of these is an example of a secondary storage device?", a: "d", options: ["RAM", "Cache", "Register", "Hard Drive"] },
    { q: "Which of the following is NOT a characteristic of an object in OOP?", a: "c", options: ["State", "Behavior", "Function", "Identity"] },
    { q: "What is the purpose of a compiler?", a: "b", options: ["To execute machine-level code", "To translate high-level code into machine code", "To manage hardware resources", "To debug programs"] },
    { q: "What does 'HTTPS' stand for?", a: "a", options: ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol Server", "HyperText Transfer Protocol Session", "HyperText Transfer Protocol Standard"] },
    { q: "Which of the following is a characteristic of a good algorithm?", a: "d", options: ["Infinite loop", "Ambiguity", "High complexity", "Low time complexity"] },
    { q: "What is the primary function of an operating system's kernel?", a: "a", options: ["To manage hardware resources", "To compile code", "To manage applications", "To provide a user interface"] },
    { q: "Which data structure is used for implementing LIFO (Last-In, First-Out) operations?", a: "b", options: ["Queue", "Stack", "Tree", "Graph"] },
    { q: "Which of the following is an advantage of dynamic memory allocation?", a: "d", options: ["Fixed size", "Low memory usage", "Fast access", "Efficient memory usage"] },
    { q: "What is a class in object-oriented programming?", a: "c", options: ["A control structure", "A type of variable", "A blueprint for creating objects", "A function"] },
    { q: "What is the main function of the ALU in a CPU?", a: "d", options: ["To store data", "To manage memory", "To handle input/output operations", "To perform arithmetic and logical operations"] },
    { q: "Which sorting algorithm is known for its simplicity?", a: "a", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"] },
    { q: "What does the term 'bit' represent?", a: "b", options: ["Byte", "Binary digit", "Memory unit", "Storage unit"] },
    { q: "Which of the following represents a characteristic of RAM?", a: "d", options: ["Non-volatile", "High latency", "Slow access speed", "Volatile"] },
    { q: "In a database, what is a primary key?", a: "a", options: ["A unique identifier for a record", "A relationship between tables", "A foreign key", "An index"] },
    { q: "What is the primary function of an assembler?", a: "c", options: ["To manage files", "To compile programs", "To convert assembly language to machine code", "To interpret scripts"] },
    { q: "Which data structure is used for depth-first search in graphs?", a: "b", options: ["Queue", "Stack", "Tree", "Heap"] },
    { q: "What is the purpose of a 'break' statement in a loop?", a: "c", options: ["To skip an iteration", "To repeat the loop", "To exit the loop", "To continue the loop"] },
    { q: "What is the role of DNS in networking?", a: "d", options: ["To manage network connections", "To encrypt data", "To store IP addresses", "To translate domain names to IP addresses"] },
    { q: "Which of the following is a characteristic of object-oriented programming?", a: "b", options: ["Procedural code", "Encapsulation", "Global variables", "Linear execution"] },
    { q: "Which of these is NOT a characteristic of a queue?", a: "a", options: ["LIFO", "FIFO", "Sequential access", "Used in breadth-first search"] },
    { q: "Which data structure is ideal for implementing a circular buffer?", a: "c", options: ["Stack", "Queue", "Array", "Linked List"] },
    { q: "Which of the following is a key feature of a relational database?", a: "c", options: ["Unstructured data", "Hierarchical structure", "Data organized in tables", "Fixed schema"] },
    { q: "What is the purpose of the 'continue' statement in a loop?", a: "d", options: ["To break out of the loop", "To end the loop", "To repeat the loop", "To skip the current iteration and continue with the next"] },
    { q: "Which of the following is a key feature of cloud computing?", a: "a", options: ["On-demand self-service", "Dedicated hardware", "Manual scaling", "Local storage"] },
    { q: "Which of these is an example of an immutable data structure?", a: "b", options: ["Array", "String", "Linked List", "Stack"] },
    { q: "What does the term 'protocol' refer to in networking?", a: "c", options: ["A hardware device", "A network connection", "A set of rules for data communication", "A type of encryption"] },
    
    { q: "Which of the following is NOT a step in problem-solving using computers?", a: "d", options: ["Testing", "Understanding the problem", "Debugging", "Writing documentation before coding"] },
    { q: "Which programming paradigm emphasizes using functions and avoiding changing-state and mutable data?", a: "c", options: ["Object-Oriented Programming", "Procedural Programming", "Functional Programming", "Logic Programming"] },
    { q: "In a flowchart, what symbol is used to represent a decision-making process?", a: "c", options: ["Oval", "Rectangle", "Diamond", "Parallelogram"] },
    { q: "What is a pseudocode primarily used for?", a: "c", options: ["Executing programs", "Visualizing algorithms", "Describing algorithms without following the syntax of a programming language", "Compiling code"] },
    { q: "Which data structure follows the Last-In-First-Out (LIFO) principle?", a: "b", options: ["Queue", "Stack", "Tree", "Linked List"] },
    { q: "What does the term 'database' refer to in computer science?", a: "b", options: ["A single file stored on a hard drive", "A collection of related data organized for easy access and management", "A backup system for computer memory", "A type of operating system"] },
    { q: "What is the output of a program that runs a loop from 1 to 20, summing the values and then divides the sum by 20?", a: "b", options: ["The sum of all numbers from 1 to 20", "The average of numbers from 1 to 20", "The product of numbers from 1 to 20", "None of the above"] },
    { q: "In programming, what does 'debugging' refer to?", a: "c", options: ["Writing code", "Designing an algorithm", "Testing and fixing errors in a program", "Documenting code"] },
    { q: "Which of the following is a common control structure in pseudocode?", a: "b", options: ["Module", "Sequence", "Symbol", "Compilation"] },
    { q: "What does the 'push' operation in a stack do?", a: "d", options: ["Removes an item from the top of the stack", "Adds an item to the bottom of the stack", "Removes an item from the bottom of the stack", "Adds an item to the top of the stack"] },
    { q: "What is the main difference between a stack and a queue?", a: "b", options: ["A stack is FIFO, and a queue is LIFO", "A stack is LIFO, and a queue is FIFO", "Both are LIFO structures", "Both are FIFO structures"] },
    { q: "What is the first step in the Software Development Life Cycle (SDLC)?", a: "b", options: ["Coding", "Problem analysis", "Testing", "Documentation"] },
    { q: "What is an algorithm's primary characteristic?", a: "c", options: ["It should be ambiguous", "It should run indefinitely", "It must be precise and finite", "It should not require memory"] },
    { q: "In binary trees, what is a node that has no children called?", a: "c", options: ["Root node", "Parent node", "Leaf node", "Internal node"] },
    { q: "Which type of loop repeats until a specific condition is met?", a: "c", options: ["Infinite loop", "Finite loop", "Conditional loop", "Sequential loop"] },
    { q: "What is the primary role of an operating system in a computer?", a: "b", options: ["Compiling code", "Managing hardware resources and software applications", "Storing user data", "Executing machine-level code"] },
    { q: "What symbol in a flowchart is typically used to denote the start and end of a process?", a: "c", options: ["Diamond", "Rectangle", "Oval", "Parallelogram"] },
    { q: "Which of the following data structures allows efficient insertion and removal of elements?", a: "b", options: ["Array", "Linked list", "Record", "Hash table"] },
    { q: "What does the term 'bit' stand for?", a: "c", options: ["Byte Information Type", "Binary Information Token", "Binary Digit", "Byte Digit"] },
    { q: "What is the main purpose of a flowchart?", a: "b", options: ["To store data", "To visually represent the sequence of operations in an algorithm", "To compile code", "To manage memory"] },
    { q: "In which scenario would you use a queue data structure?", a: "c", options: ["Reversing a string", "Undo functionality in software", "Task scheduling", "Expression evaluation"] },
    { q: "What is the purpose of the 'else' clause in a decision control structure?", a: "b", options: ["It executes when the 'if' condition is true", "It executes when the 'if' condition is false", "It skips the execution", "It ends the program"] },
    { q: "Which component is responsible for executing the fetch-decode-execute cycle?", a: "c", options: ["RAM", "Hard Drive", "CPU", "GPU"] },
    { q: "What does an algorithm need to be considered efficient?", a: "c", options: ["High memory usage", "Long processing time", "Low processing time and memory usage", "Complex logic"] },
    { q: "Which of the following is a key advantage of pseudocode over flowcharts?", a: "b", options: ["Pseudocode is more visual", "Pseudocode is easier to modify", "Pseudocode is difficult to understand", "Pseudocode requires specialized tools"] },
    { q: "What does the term 'word length' in computing refer to?", a: "b", options: ["The length of a word in a dictionary", "The number of bits processed by a computer's CPU in one operation", "The size of the hard drive", "The size of a file"] },
    { q: "In a decision symbol of a flowchart, what do the exit paths represent?", a: "b", options: ["Different functions", "Different conditions and their outcomes", "A loop structure", "A sequence of steps"] },
    { q: "What is the main difference between an array and a linked list?", a: "b", options: ["An array is a dynamic structure, while a linked list is static", "An array has fixed size, while a linked list can grow and shrink dynamically", "An array stores data randomly, while a linked list stores data sequentially", "Both have fixed sizes and cannot be resized"] },
    { q: "What is the purpose of the 'read' command in QBASIC?", a: "c", options: ["To print data to the screen", "To read data from a file", "To read a list of variables and constants", "To end the program"] },
    { q: "Which of the following is a correct representation of the end of a program in a flowchart?", a: "c", options: ["Rectangle", "Diamond", "Oval", "Parallelogram"] },
    { q: "In tree data structures, what is the 'root' node?", a: "c", options: ["A node with no children", "The first node in the sequence", "The topmost node from which all other nodes descend", "A node with exactly two children"] },
    { q: "What does a 'queue' data structure follow?", a: "a", options: ["First-In-First-Out (FIFO) principle", "Last-In-First-Out (LIFO) principle", "Random Access", "Circular Access"] },
    { q: "What is an advantage of using a linked list over an array?", a: "b", options: ["Faster access to elements", "Easier to insert and delete elements", "Requires less memory", "Faster sorting of elements"] },
    { q: "What is the significance of the 'else' branch in conditional programming structures?", a: "b", options: ["It executes when all conditions are true", "It provides an alternative execution path when conditions are false", "It terminates the program", "It repeats the code"] },
    { q: "Which of the following is NOT a property of a binary tree?", a: "b", options: ["Each node has at most two children", "Every node has exactly three children", "It can be balanced or unbalanced", "It can be used for efficient searching"] },
    { q: "What does the 'print' command do in QBASIC?", a: "c", options: ["Ends the program", "Stores data in a variable", "Displays output on the screen", "Reads input from the user"] },
    { q: "What does 'bit' in digital systems represent?", a: "b", options: ["A byte", "A binary digit, either 0 or 1", "A small memory unit", "A large storage unit"] },
    { q: "What is a primary characteristic of object-oriented programming (OOP)?", a: "b", options: ["Data and functions are separated", "Programs are organized into objects that encapsulate data and behavior", "Programs use functions without objects", "It relies solely on procedural code"] },
    { q: "Which structure is used to represent hierarchical relationships in data?", a: "c", options: ["Stack", "Queue", "Tree", "Array"] },
    { q: "What is the role of 'testing' in the software development process?", a: "c", options: ["Writing the program", "Debugging errors", "Verifying that the program works as expected", "Documenting the code"] },
    { q: "What does a 'node' in a linked list contain?", a: "a", options: ["Data and a pointer to the next node", "Only data", "Data and multiple pointers to other nodes", "Data and a pointer to the first node"] },
    { q: "Which of the following is a key advantage of using a stack in computer programs?", a: "b", options: ["Allows random access to elements", "Supports LIFO operations", "Can be resized dynamically", "Provides direct memory access"] },
    { q: "What does the 'input' command in QBASIC do?", a: "c", options: ["Ends the program", "Prints data on the screen", "Reads user input", "Stores data in a file"] },
    { q: "What is an essential property of an algorithm in computer science?", a: "b", options: ["It must run indefinitely", "It should have an unambiguous sequence of steps", "It should use minimal resources, even if it runs forever", "It must involve multiple users"] },
    { q: "In a circular linked list, what does the last node point to?", a: "a", options: ["It points to the first node", "It points to itself", "It points to a null reference", "It points to the second node"] },
    { q: "What is the purpose of 'documentation' in the software development process?", a: "c", options: ["Writing the code", "Debugging the code", "Explaining the code and how to use it", "Testing the code"] },
    { q: "Which of the following best describes the concept of 'bit'?", a: "b", options: ["A complex program", "The smallest unit of data in a computer", "A storage device", "An input device"] },
    { q: "What is the role of 'coding' in the software development process?", a: "b", options: ["Creating flowcharts", "Translating algorithms into a programming language", "Debugging the program", "Testing the program"] },
    { q: "What does the term 'LIFO' stand for in data structures?", a: "a", options: ["Last-In-First-Out", "Last-In-First-Order", "List-In-First-Out", "Least-In-First-Out"] }
];


let randomQuestions = [];

function getRandomQuestions() {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 35);
}

function displayQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");
    randomQuestions = getRandomQuestions();

    randomQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${q.q}`;
        questionDiv.appendChild(questionTitle);

        q.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.textContent = option;

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = String.fromCharCode(97 + optionIndex); // 'a', 'b', 'c', 'd'

            label.prepend(input);
            questionDiv.appendChild(label);
        });

        questionsContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    const results = [];

    randomQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const selectedValue = selectedOption ? selectedOption.value : null;
        const isCorrect = selectedValue === q.a;
        
        if (isCorrect) {
            score++;
        }

        results.push({
            question: q.q,
            selectedAnswer: selectedValue,
            correctAnswer: q.a,
            options: q.options,
            isCorrect: isCorrect
        });
    });

    const scoreContainer = document.getElementById("scoreContainer");
    scoreContainer.textContent = `Your Score: ${score} / 35`;

    // Store results in localStorage and redirect to results page
    localStorage.setItem('quizResults', JSON.stringify(results));
    setTimeout(() => {
        window.location.href = "results.html";
    }, 3000); // Redirect after 3 seconds
}

window.onload = displayQuestions;
