var a = prompt("A?", "");
var b = prompt("B?", "");
var c = prompt("C?", "");
if ( a==b==c ) {
  console.log ('Eequivalent triangle');
}
if ( a==b!=c || a!=b==c || a==c!=b ) {
  console.log ('Isosceles triangle');
}

if ( a!=b!=c ) {
  console.log ('Normal triangle');
}