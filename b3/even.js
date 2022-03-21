function evenNum(a,b){
    let container = [];
    for(let i = a;i<= b;i++){
if(i%2===0){
    container.push(i)
}
    }
    return container;
}
module.exports = evenNum;