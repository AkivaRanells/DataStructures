// import Queue from './queue.js';
const Queue = require('./queue.js')


class MaxQueue{
    constructor(){
        this.queue = [];
        this.maximumQueue = new Queue();
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
        this.queue.unshift(x);
        if(x > this.maxInQueue){
            this.maximumQueue.dequeue();
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.queue.shift()
        }
        return null;
    }
    maxInQueue(){
       return this.maximumQueue.peek()
    }

}

let maxQueue = new MaxQueue();
console.log(maxQueue.isEmpty());    //true
console.log(maxQueue.print());      //[]
console.log(maxQueue.enqueue(2));      
console.log(maxQueue.isEmpty());     //false
console.log(maxQueue.enqueue(4));      
console.log(maxQueue.print());      //[4,2]
console.log(maxQueue.maxInQueue());  //4
console.log(maxQueue.dequeue());
console.log(maxQueue.print());      //[2]

console.log(maxQueue.dequeue());
console.log(maxQueue.peek());       //null
console.log(maxQueue.isEmpty());    //true