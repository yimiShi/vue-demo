function MVVM() {
  this.a = {name: 123}
  const arr =  [1]
  const me = this
  arr.forEach(key => {
    console.log(key);
    console.log(this);
    console.log(me);
  })

  arr.forEach(function (key) {
    console.log(333, this);
  }.bind(this))
  
}

const obj = new MVVM()
console.log(obj);

// console.log(obj.a);a


