## Ex1
```
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
let newObj =JSON.parse(JSON.stringify(obj));
return newObj;
}
const obj2 = cloneDeep(obj1)
obj2.x = 10
console.log(obj1);
console.log(obj2);

```
## Ex2
Cho đoạn code sau
```
const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
const apples = [...macbooks];
apples[0] = 'air';
apples[1].model = 'm1';
console.log(...macbooks);
console.log(macbooks) // ["macbook2015",{model: 'm1'},"macbook2017"];
console.log(apples) // ["air",{model: 'm1'},"macbook2017"];
```
(...) là toán từ spread nó dùng để sao chép một arr hay một obj mà ko bị tham chiếu trong trường hợp này apples là một arr dc coppy bời toán tử spread từ mackbook có 3 phần tử thì trong có 2 phần từ được lưu với định dạng là giá trị và 1 phần từ lưu dưới dạng địa chỉ ô nhớ là giá trị "{model: 'm1'}"" bởi vậy khi phần tử nay ở trong 2 arr là apples và macbook sẽ đều giống nhau

## Ex3
Cho đoạn code sau
```
var text = 'outside';
function show() {
  console.log(text) //1
  var text = 'inside';
}
show();
```
theo e biết với var nếu tên biến nó trùng, thì nó sẽ ưu tiên cái var text ở trong func mà var trong func đc khai báo sau console.log vi vậy đến dong console thì text mới chỉ được lưu chứ chưa có giá trị sau dong console "text" mới được gán giá trị thế nên sẽ log undefined

## Ex4
Hoàn thiện 2 hàm inBetween và inArray sao cho đoạn code chạy ra kết quả trong comment
```
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
```

## Ex5
Cho đoạn code sau. Kết quả hiện ra là gì? Giải thích 
```
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1
```
Hàm có this được gọi là 1 constructor function. ta có thể xem như một function object:

sau khi couter dc khởi tạo bằng từ khóa new nó sẽ thừa hưởng các thuốc tính của Cuonter như up và down.

Từ khóa this sẽ trỏ đến đối tượng hiện tại, và đó chính là các thuộc tính của hàm Counter vì vậy nó sẽ được return lại.

vậy nên các kết quả của các lần alert sẽ đều được cập nhật từ kết quả của lần trước đó 

## Ex6
```
hello

world

hi
```
Theo em dòng console.log thứ nhất sẽ được gọi da đâu tiên như một lẽ tự nhiên, sau đó đến dòng thứ 2 là dong settimeout() là hàm bộ đếm nó sẽ được gửi lên webApi để thực hiện đêm sau đó mới gửi về kết quả trong thơi gian gửi lên đó dòng thứ 3 đã được thục hiện vì js của một ngôn ngữ đơn luồng nên nó sẽ chạy một lèo mà không đợi
