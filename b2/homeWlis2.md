# Ex1
```
const fs = require('fs');
let data = `1 8 5 7 2`
fs.writeFile('numbers.txt',data,{encoding:'utf8'},(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("resolve");
    }
    
})
```
# Ex2
```
const writeFile = (path, data) => {
    return new Promise((resolve, reject) => {
       fs.writeFile(path, JSON.stringify(data), {encoding: 'utf-8'}, (err) => {
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

  let myName = {name:'linhhoang'}
  writeFileToDisk('text.txt',myName)
```

# Ex3
Từ file numbers.txt của Ex1, sử dụng module file system để đọc nội dung, đếm số các sổ lẻ và ghi nội dung vào file result.txt

Ví dụ 
- file numbers.txt là `1 8 5 7 2` thì file result.txt là `3`
- file numbers.txt là `9 2 1 3 5` thì file result.txt là `4`

# Ex4
Cho đoạn code sau:
```
   let wait = async (time) =>{ new Promise((resolve) => {
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
```

