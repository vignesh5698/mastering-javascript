const delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

const tasks = [
  delay(7),
  delay(2),
  delay(3),
  delay(5),
  delay(1)
]

class PromiseQueue {
  constructor(promises=[], concurrentCount=1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return (this.running.length < this.concurrent) && this.todo.length;
  }

  run() {
    while(this.runAnother) {
      const promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.run();
      });
      this.running.push(promise);
    }
  }
}

const delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
delayQueue.run();
