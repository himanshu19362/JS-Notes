//Flatten an object
let obj = {}

function flat(object , path){
	for(let key in object){
		if(typeof object[key] != 'object'){
			obj[path + "_" + key] = object[key]
		}
		else{
			flat(object[key] , path + "_" + key)
		}
	}

}

let user = {
	name:"Himanshu",
	address: {
		personal: {
			city: "Delhi",
			area: "Pitampura"
		},
		office: {
			city:"Hyderabad",
			area: {
				landmark: "Hitech"
			}
		}
	}
}

flat(user , "user")

console.log(obj)