//CALL STACK => NODE APIs => EVENT LOOP
//Call stack is the simple data structure provided by v8 js engine -> Tracks exection of program 
//First thing, our script get wrapped in the main() that node JS provide

//main() pushes into the call stack at the bottom, at that time noting else is inside the stack.
const a = 10;
const b = a + 15 ;
console.log(a+b)
//Whenever we call a function, it'll added to call stack
//In this case, log function pushed into call stack
//When the function finishes by either running to the end or returning a value is removed from the call stack.
//In above program, log completed its job as printing it's result and thus it removed from the call stack
//Then the end of the script is reached and main() removed from the call stack

const listFrameworks = (frameworks) => {
    frameworks.forEach((framework) => {
        console.log(framework);
    });
}

const frameworks = ['node.js', 'angular.js', 'vue.js'];
listFrameworks(frameworks);


//In this program, initially main() added to the call stack ,
// then another calling function listFrameworks([...]) added to the call stack
//Inside the listFrameworks function, forEach method is called. Since forEach(...) is the calling function,
// it'll be added to the call stack.
//Inside forEach(...) anonymous function is called, then it is added to call stack.
//Inside anonymous(), log() is called so log function pushed into call stack
//After complete log(), log() is pop from the call stack.
//Then the end of the anonymous() is reached and anonymous() removed from the call stack
//Then it works like the same for another two elements of list.
//At this time forEach() gone through the process and pop out from the call stack
//After forEach() completed, the function end is reached so listFrameworks(...) pop out from the call stack
//since everything gets completed from the main(), main() popped out from the call stack

console.log('Starting');

setTimeout(() => {
    console.log('2s Timer')
}, 2000);


setTimeout(() => {
    console.log('0s Timer')
}, 0);

setTimeout(() => {
    console.log('2s Timer2')
}, 2000);

console.log('Ending');



//Iniially main() added to the call stack
//Then log('startting') added to the call stack, then it completes after printing in console and removed from the callstack.
//Next, setTimeout() is added to the call stack. setTimeout() is not a part of javascript programming langugge
// and v8 engine has no implementation for it
//Instead node.js creates implementation for setTimeout() which is written in c++
//It's async wait for specfic amount of time 
//When we call setTimeout() it is registering an event with NODEJS APIs and then is event callback pair.
//the event has to wait for 2 sec. the callback pair might be databsae operations or HTTP calls
//While we are waiting for the setTimeout(...,2000) to happens, the other stuff from main() added to the call stack
//Next setTimeoout(...,0) func will be added to the call stack, Since it is a part of node API, it registering an event to the NODE APIs.
//Apart from the scene javascript is the single threaded that doesn't mean nodejs is completely single threaded
//node runs another threads in c++ behind the scenes to manager events

//So setTimeout(...,0) will be added in call stack and it registers another event in node API and thst's callback back is 0 sec.
//At that point, we've two nodeAPIs waiting in the background
//In this case, 0 second is up and so the callback needs to get execute 
//So it is added to the callback Quue of event loop
//The job of callback queue is simple. it maintains list of callback funtions that is ready to get executed
//At that point, callback(0 sec) is added to the callback queue of event loop
//Event loop executes only if call stack is empty, since call stack contains main() it will wait for main() ti complete
//Then the log('Ending') will be added to call stack and gets completed
//Now main() popped out from the call stack
//At this point, call stack is empty, now the event loop can start it's job.Item in the callback queue gets executed. 
//callback function will be pushed into call stack, then it call log() and gets executed
// after log() completes it's job it is removed from the call stack 
//Then the callback also removed from the call stack
//Now its the time for setTimeout(...,2000), after 2secs it will be added to the event loop,
//since call stack is empty event in the callback queue added to call stack
//Then it executes callback(2 seconds) , It call log() which is added to the call stack
//After completed log() it is popout from the call stack and callback(2 secs) also popped out from the call stack
//Thus the program finishes.