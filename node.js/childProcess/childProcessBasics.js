const child_process = require('child_process');

/*  
exec():
  - exec() runs command in a shell and buffers the output(which means kept in memory)
  - it waits for the process to end and tries to return all the buffered data at once.
  - it return buffer(upto max size), here max size is 200*1024 ~= 200kb
  - if it exceed max size of buffer, the size of buffer can be changed by: exec(command, {maxBuffer: 1024 * 500}, cb);
  - it is not advisable to change max buffer size which may cause performance issue. Use instead spawn 
*/

child_process.exec('cd ..; ls', (err, stdout, stderr) => {
  const folders = stdout.split('\n');
  console.log('Folders List:', folders);
  console.log('Error: ', err ,' ::: Stderr:' , stderr || null);
});

/*
spawn():
  - this method executes the command in new process
  - this method uses STREAM API, so it's output of command is available via listeners
  - pass args to command as array of string. Ex: spawn("ls", ["-la"]);
  - events available are: data, error, close
*/


const spawn = child_process.spawn('cat', ['childProcessBasics.js']);

spawn.stdout.on('data', data => {
  console.log(`${data}`);
});

/*
fork();
  - fork() is a special case of spawn() to create node processes()
  - it runs fresh instance of v8 engine
  - used to run multiple copies of same program in on single processor
  - easily create multiple workers
*/