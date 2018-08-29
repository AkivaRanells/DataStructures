class Stack {
    constructor() {
        this.stack = [];
    }
    print() {
        return (this.stack);
    }
    push(x) {
       this.stack[this.stack.length] = x;
    }
    isEmpty() {
        if (this.stack.length < 1) return true;
        return false;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } 
        return null;
    }
    pop(){
        if(!this.isEmpty()){
           return this.stack.splice(this.stack.length-1, 1,[0]);
        }
        return null;
    }
}
//Use this code to test your stack:
var myStack = new Stack();
console.log(myStack.isEmpty());    //true
console.log(myStack.print());      //[]
console.log(myStack.push(2));      
console.log(myStack.isEmpty());     //false
console.log(myStack.push(4));      
console.log(myStack.print());      //[2,4]
console.log(myStack.peek());       //4
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());       //null
console.log(myStack.isEmpty());    //true





