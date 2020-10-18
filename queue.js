class Queue{ //FIFO
    constructor() {
        this.queue = [];

    }
    enqueue(item) { //enter/ add
        this.queue.push(item);
    }
    dequeue() {  //remove
        if (this.queue.length) {
            return this.queue.shift();
        }
    } 
}

const foddie = new Queue();
foddie.enqueue('Kolu');
foddie.enqueue('Molu');
foddie.enqueue('Tolu');
foddie.enqueue('Polu');
console.log(foddie.queue);
const winners = foddie.dequeue();
console.log(winners);
console.log(foddie.queue);