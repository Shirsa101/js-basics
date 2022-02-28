const arr=[1];

let person  = {
    name : 'John',
    age : 27,
    sayHello : function(){
        console.log(this);//refers to the person object
        arr.forEach(() => {
            console.log(this);//inside foreach
        })
    }
}
