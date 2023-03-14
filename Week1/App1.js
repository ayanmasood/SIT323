var async =function(){
    setTimeout(function(){log("I am coming out later although I have been called before the next one"),2000})
}


var adder=function(first,second){
    var sum=first+second
    return sum
}

var log=function(msg){
    console.log("[Log]: ",msg)
}

log("hello world")
log("welcome to SIT323/737")
log("the sum is " +adder(5,6))
async();
log("this is going to come out before the previous one")