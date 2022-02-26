console.log(global);

let name = "coderWhy";
console.log(name); // coderWhy
console.log(global.name); // undefined

// 因为一个文件对应一个窗口，定义的变量会被挂载到window上
// 但是node是全局的, 如果一个文件中定义的变量被挂载到global上的话, 在另外一个文件也能访问到

console.log(process);