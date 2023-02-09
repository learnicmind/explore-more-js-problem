/*
*1.show output 1-50;
*2.if the number is divisible by 3 then instead of number show "foo"
*3.if the number is divisible by 5 then instead of number show "bar"
*4.if the number is divisible by 3&5 both the instead of number show "foobar"
*/ 

for (let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    
    else if(i % 5 === 0){
        console.log('bar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else{
        console.log(i);
    }
}