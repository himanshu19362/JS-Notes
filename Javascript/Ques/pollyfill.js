//pollyfill for forEach 

const arr = [1,2,3,4,5]


Array.prototype.myEach = function(callbackFun){
	let array = this
	for(let val of array){
		callbackFun(val)
	}
}

arr.myEach((val)=>{
	console.log(2*val)
})


//----------------------------------------------------

//pollyfill for bind method
let name = {
	firstname: "Himanshu",
	lastname: "Verma"
}

const printName = function(city , state){
	console.log(this.firstname + " " + this.lastname + " " + city + " , " + state)
}

const bind1 = printName.bind(name , 'Delhi')
bind1('New Delhi')

//Pollyfill for bind method
Function.prototype.myBind = function(...args){
	let currFun = this
	let arr = args.slice(1)

	return function (...args1){
		currFun.apply(args[0] , [...arr , ...args1])
	}
}

const bind2 = printName.myBind(name , 'Delhi')
bind2('New Delhi')


