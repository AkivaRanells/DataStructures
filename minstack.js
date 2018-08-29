class MinStack {
    constructor() {
        this.stack = [];
        this.mini = Infinity;
    }
    print() {
        return (this.stack);
    }
    push(x) {
        if(typeof(x)==='number'){
            if(x<this.mini){
                this.mini=x;
            }
            this.stack[this.stack.length] = x;
        }
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
    smallest(){
        return this.mini;
    }
}
let minStack = new MinStack();
console.log(minStack.smallest());
minStack.push(5);
console.log(minStack.smallest());