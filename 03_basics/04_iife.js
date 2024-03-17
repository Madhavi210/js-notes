// Immediately Invoked Function Expressions (IIFE)

// (function)(call function)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// when use 2 iife use ; semicolon

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


/*
Use cases
Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
 */






// js execution context 
// 1. global execution context , global environment  ==> this
//  functional execution context
//  eval execution context

//2. memory creation phase  = memory allocation 
//3. execution phase