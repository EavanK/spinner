const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;

for (const pin of spin) {
  setTimeout(() => {
    process.stdout.write(`\r${pin}    `);
  }, timer);
  timer += 200;
}
setTimeout(() => process.stdout.write('\n'),timer);