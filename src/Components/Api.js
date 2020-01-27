
export default {
    getToken: (email,password) => {
        return new Promise((resolve,reject) => {
            fetch("https://testsamheroku.herokuapp.com/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({"username": email ,"password": password })
            }).then((data) => {
                data.json().then((json) => {
                    if (json.token) {
                        localStorage.setItem("token", json.token);
                        resolve(json)
                    } 
                }).catch((errors)=>{
                    reject(errors)
                    console.log(errors)
                })
            })
        })
    },
    Register: (firstname, lastname, email, password) => {
        return new Promise((resolve, reject) => {
            fetch("https://testsamheroku.herokuapp.com/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: JSON.stringify({"firstname": firstname, "lastname": lastname, "email" : email, "password": password})
            }).then((data) => {
                data.json().then((json) => {
                    resolve(json)
                }).catch((errors)=>{
                    reject()
                    console.error('errors',errors)
                    
                })
            })
        })
    },
}
