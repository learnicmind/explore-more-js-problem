/*
*1.show output 1-50;
*2.if the number is divisible by 3 then instead of number show "foo"
*3.if the number is divisible by 5 then instead of number show "bar"
*4.if the number is divisible by 3&5 both the instead of number show "foobar"
*/ 

for (a = 1; a <= 50; a++){
    if (a % 3 === 0 && a % 5 === 0){
        console.log('foobar');
    }
    else if (a % 3 === 0){
        console.log('foo');
    }
    else if (a % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(a);
    }
}