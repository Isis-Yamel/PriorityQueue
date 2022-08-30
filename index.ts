interface priorityElement {
  element: string,
  priority: number
}

class QueueElement {
  element: string
  priority: number

  constructor(element: string, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  queueItems: priorityElement[]

  constructor() {
    this.queueItems = [];
  }
  enqueueFunction(element: string, priority: number) {
    let queueElement = new QueueElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.queueItems.length; i++) {
      if (this.queueItems[i].priority > queueElement.priority) {
        this.queueItems.splice(i, 0, queueElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.queueItems.push(queueElement);
    }
  }

  dequeueFunction() {
    if (this.isPriorityQueueEmpty()) {
      return "No elements present in Queue";
    }
    return this.queueItems.shift();
  }

  front() {
    if (this.isPriorityQueueEmpty()) {
      return "No elements present in Queue";
    }
    return this.queueItems[0];
  }

  rear() {
    if (this.isPriorityQueueEmpty()) {
      return "No elements present in Queue";
    }
    return this.queueItems[this.queueItems.length - 1];
  }

  isPriorityQueueEmpty() {
    return this.queueItems.length === 0;
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueueFunction("Make the bed", 2);
priorityQueue.enqueueFunction("Take a shower", 1);
priorityQueue.enqueueFunction("Exercise", 1);
priorityQueue.enqueueFunction("Brush teeth", 2);
priorityQueue.enqueueFunction("Relax", 3);

// To visualize it , console.log