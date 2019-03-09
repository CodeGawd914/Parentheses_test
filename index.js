/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

//first we have to go threw the string and identify what is in it

function validParentheses(parentheses) {
  let count = 0
  for (let i = 0; i < parentheses.length; i++){
    if (parentheses[i]==='('){
      count ++
    } else if (parentheses[i]===')') {
      count --
    }
    if (count < 0){
      return false 
    }
  }
  return !count
}
