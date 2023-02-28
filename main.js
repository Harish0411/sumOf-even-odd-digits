// sum of even and odd digits of the number

var a = Number(prompt("Enter any number to find sum of odd & even digits"));
var b=0,k=0;
let num =a;

while(a>0){
      e = a%10;
	  a = (a-e)/10;
	  if(e%2 == 0){
	     b+=e; 
	
	}
	else{
	    k+=e;	
	}
}

console.log(`sum of odd digits of ${num} is ${k}`);
console.log(`sum of even digits of ${num} is ${b}`);