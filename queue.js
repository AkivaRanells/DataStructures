class Queue{
    constructor(){
        this.queue = [];
    }

    isEmpty(){
        if(this.queue.length<1) return true;
        return false;
    }

    print(){
        return this.queue;
    }

    peek(){
        if(!this.isEmpty()){
            return this.queue[0];
        }
        return null;
    }

    enqueue(x){
        this.queue.splice(0, 0, x);
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.queue.splice(0,1)
        }
        return null;
    }

}
module.exports = Queue
let myQueue = new Queue();
console.log(myQueue.isEmpty());    //true
console.log(myQueue.print());      //[]
console.log(myQueue.enqueue(2));      
console.log(myQueue.isEmpty());     //false
console.log(myQueue.enqueue(4));      
console.log(myQueue.print());      //[4,2]
console.log(myQueue.peek());       //4
console.log(myQueue.dequeue());
console.log(myQueue.print());      //[2]

console.log(myQueue.dequeue());
console.log(myQueue.peek());       //null
console.log(myQueue.isEmpty());    //true
