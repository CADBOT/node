function stageOne() {
  console.log('stageOne');
  stageTwo();
}

function stageTwo() {
  console.log('stageTwo');
  process.nextTick(stageThree);
}

function stageThree() {
  console.log('stageThree');
  process.nextTick(stageFour);
}

function stageFour() {
  console.log('stage Four');
}

console.log('outer one');
stageOne();
console.log('outer two');
stageOne();
