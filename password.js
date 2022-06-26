let password ="Objectivization2"
let S =`   _____ \r\n  \/ ____|\r\n | (___  \r\n  \\___ \\ \r\n  ____) |\r\n |_____\/ \r\n         \r\n         `
let F =`  ______ \r\n |  ____|\r\n | |__   \r\n |  __|  \r\n | |     \r\n |_|     \r\n         \r\n         `
//checks if password is at least 10 characters long
//checks if it contains at least one letter and one number
//checks to see if there is any uppercase letters
//checks to see if there are lower case numbers 
//checks to see if there is no @#$%&  special characters
if(/^[a-zA-Z0-9]+$/.test(password) && password.length >= 10 && /^[^@#$%&]+$/.test(password) ){ 
    console.log(S,"success");
}  else {
    console.log(F,"Fail")
}
