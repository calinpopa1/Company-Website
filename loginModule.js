var arrayOfObj = [
   {
    username: "testUser", 
    password: "testPwd"
   }
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for(i=0 ; i < arrayOfObj.length ; i++){
        if(username == arrayOfObj[i].username && password == arrayOfObj[i].password){
            alert (username + " is logged in!")
            return
        }
    }
    alert("incorrect username or password")
}

function register(){
    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser= {
        username: registerUser,
        password: registerPassword
    }
    
    for(i=0; i<arrayOfObj.length;i++){
        if(registerUser==arrayOfObj[i].username){
            alert("this username is already taken, please choose another")
            return
        }else if(registerPassword.length<8){
            alert("Password is too short, include 8 or more characters")
            return
        }
        
    }
    arrayOfObj.push(newUser)
    alert("congratulations! you are now registered!")
}


function update(){
    var oldUser = document.getElementById("oldUsername").value
    var oldPwd = document.getElementById("oldPassword").value
    var updatedUser = document.getElementById("updatedUsername").value
    var updatedPwd = document.getElementById("updatedPassword").value

    if(updatedPwd.length<8){
        alert("new password is too short, include 8 or more characters")
        return
    }
    
    for(i=0 ; i < arrayOfObj.length ; i++){
        if(updatedUser.length==0 || updatedPwd.length==0){
            alert("new username or new password field is empty")
            return
        }
                
        
        if(oldUser == arrayOfObj[i].username && oldPwd == arrayOfObj[i].password){
            var newObject = {
                username: updatedUser,
                password: updatedPwd
            }
            arrayOfObj[i]=newObject
            alert("user updated!")
            return
        }
    }
    alert("Old username or old password is incorrect")
}