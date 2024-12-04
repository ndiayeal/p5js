function incrementeur(x) {
	return (a)=> a + x;
}


let incr = incrementeur(10);
console.log(incr(2)); // 7
console.log(incr(4)); // 9


console.log(incrementeur(100)(10));
