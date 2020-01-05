const a1 = '0';
const a2 = 0;
console.log('a1 == a2:', a1 == a2);   //true
console.log('a1 === a2:', a1 === a2);   //false


console.log(false == 'false')   //false  => which tries to convert RHS 'false' into Boolean
                            //Boolean('false') => true
                          //false == true => false

console.log(0 == '')    //true
console.log(0 === '')   //false