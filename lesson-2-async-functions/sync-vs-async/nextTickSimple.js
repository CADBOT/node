function helloWorld() {
  console.log('hello world!');
}

function goodbyeWorld() {
  console.log('goodbye world!');
}

helloWorld();
helloWorld();
process.nextTick(goodbyeWorld);
helloWorld();
helloWorld();
goodbyeWorld();
