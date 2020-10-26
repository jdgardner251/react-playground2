
console.log('the code has started')
const duration = Math.floor(Math.random()*5000)
setTimeout(() => {
    console.log(`Hey! I waited ${duration} milliseconds.`);
  }, duration);
console.log('this is the last statement in the file.')

function doTask(name) {
    console.log(`${name} has started`);
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
      console.log(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  }
  
  doTask('A');
  doTask('B');
  doTask('C');
  doTask('D');
  doTask('E');
  doTask('F');