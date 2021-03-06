// const { error } = require('console');
const fs = require('fs');
// let data = ''
// fs.writeFile('numbers.txt', data, { encoding: 'utf8' }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("resolve");
//   }

// })
// data là một object
const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), { encoding: 'utf-8' }, (err) => {
      if (err) {
        reject(console.log('loi'));
      }
      else {
        resolve(true);
      }
    })
  })
}
const writeFileToDisk = async (path, data) => {
  try {
    const isSuccess = await writeFile(path, data);
    console.log(isSuccess) // true
  } catch (err) {
    console.log(err) // 'Lỗi'
  }
}

let myName = { name: 'linhhoang' }
writeFileToDisk('text.txt', myName)

let wait = async (time) => {
  new Promise((resolve) => {
    return setTimeout(resolve, time)
  })
}
async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('running');
  await wait(200);
  console.log('ending');
}
go()
const checkOdd = require('is-odd-num')
async function countOddnumber() {
  try {
    const strNumber = await fs.promises.readFile('numbers.txt', { encoding: 'utf-8' })
    console.log(strNumber);
    const numbers = strNumber.split(' ').map(x =>Number(x));
    const countOddnumber = numbers.filter(checkOdd).length;
    await fs.promises.writeFile('result.txt',`${countOddnumber}`)
        console.log(numbers);
  } catch (err) {
    console.log(err);
  }
}
countOddnumber()