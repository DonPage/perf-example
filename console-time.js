function testPromise() {
  console.time('testPromise');
  return new Promise(res => {
    setTimeout(_ => res(), 1000);
  })
}

function testCallback(cb) {
  console.time('testCallback');
  return setTimeout(_ => cb(), 1000);
}

testPromise().then(() => console.timeEnd('testPromise'));

testCallback(() => console.timeEnd('testCallback'));
