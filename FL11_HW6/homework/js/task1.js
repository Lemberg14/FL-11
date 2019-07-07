var ax = prompt("A(x)?", "");
var ay = prompt("A(y)?", "");
var bx = prompt("B(x)?", "");
var by = prompt("B(y)?", "");
var cx = prompt("C(x)?", "");
var cy = prompt("C(y)?", "");
var longx = ((ax+bx)/2);
var longy = ((ay+by)/2);
if (longx == cx && longy == cy) {
  console.log('true');
  } else {
    console.log('false'); 
  }