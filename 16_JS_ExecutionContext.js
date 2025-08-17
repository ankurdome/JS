//Sample Code 
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2;
    return total
}
let result1 = addNum(val1,val2)
let result = addNum(10,2)


/*
1. Global Execution Context is made by defaukt. It is used with this keyword.
2. Function Execution Context
3. Eval Execution Context 

JS code runs in two phaese:
    - Memory Creation Phase: 
    - Execution Phase:

Steps:
1. Global Execution initiates with this keyowrd
2. Memory phase occurs where (val are initialised with value undefined)
   val1 -> undefined (L1)
   val2 -> undefined (L2)
   addNum -> definition of function (L3 - L6)
   result1 -> undefined (L7)
   result2 -> undefined (L8)
3. Execution Phase
   val1 <- 10
   val2 <- 5
   addNum (L7) -> new executional Context (new variable environment + execution thread)
        MEMORY PHASE:
        val1 -> undefined 
        val2 -> undefined
        total -> undefined

        EXECUTION PHASE:
        num1 -> 10
        num2 -> 5
        total -> 15
    This new context gets deleted after returning values.
    total -> 15



CLALL STACK: It follows LIFO

        |                |
        |                |
        |----------------|
        |     one().     |
        |----------------|
        |Global Execution|
        |----------------| 
*/