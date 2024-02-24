function login (username, password){

    if (username === "admin" && password === "12345"){
        return "login successfull";
    } else{
        return "invalid credentials"
    }
}

let result = login ("admin", "12345")
console.log(result)

result= login("admin","1243")
console.log(result)