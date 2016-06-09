function Tree(fruit,type, age, relative) {
  this.fruits = 'Comes from tree class'
  this.type = type;
  this.age = age;
  this.relative = relative
  this.colors = []
}

var fruitTree = new Tree('tree',15, 'flower')

Tree.prototype.addColor = function(color) {
  this.colors.push(color)
}


fruitTree.addColor('brown')

function AppleTree(fruits, type, age, relative) {
  Tree.apply(this, [type,age,relative])
  this.fruits = fruits
}

AppleTree.prototype = Object.create(Tree.prototype)

AppleTree.prototype.constructor = AppleTree

var tom = new AppleTree('Apple', 'Apple Tree', 15, 'Orange Tree')

tom.addColor('red')


console.log(tom);
