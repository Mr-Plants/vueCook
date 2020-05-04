async function fn1() {
  console.log('fn1 start')
  await fn2();
  console.log('fn1 end')
}

async function fn2() {
  console.log('fn2')
}

setTimeout(() => {
  console.log('timeout')
}, 0)

fn1();

new Promise((resolve, reject) => {
  console.log('promise start')
  resolve();
}).then(
  res => {
    console.log('promise end')
  }
);

console.log('script end');
