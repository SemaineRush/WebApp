import swal from 'sweetalert';

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
    ResetPassword: (email) => {
        return new Promise((resolve, reject) => {
            fetch("https://testsamheroku.herokuapp.com/api/auth/reset", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({"email" : email})
            }).then((data) => {
                data.json().then((json) => {
                    if (json.status) {
                        swal("Hop la boum", json.status, "success");
                    } else {
                        swal("Wrong email", json.error, "error");
                    }
                    resolve(json)
                }).catch((errors)=>{
                    reject()
                    console.error('errors',errors)
                    
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
                    if (json.error) {
                        swal("Wrong email", json.error, "error");
                    } else {
                        swal("Created with success", "Check your email", "success");
                    }
                    
                    resolve(json)
                }).catch((errors)=>{
                    reject()
                    console.error('errors',errors)
                    
                })
            })
        })
    },
    getLastElection: () => {
        return new Promise((resolve,reject) => {
            fetch("https://testsamheroku.herokuapp.com/api/election_current/", {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    "Authorization":"Bearer "+ localStorage.getItem('token')
                }
            }).then((data) => {
                data.json().then((json) => {
                resolve(json)
            }).catch((errors) => {
                reject()
                console.log(errors)
            })
        })
    })
    },
    getElections: (id) => {
        return new Promise((resolve,reject) => {
            fetch("https://testsamheroku.herokuapp.com/api/elections/"+id, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    "Authorization":"Bearer "+ localStorage.getItem('token')
                }
            }).then((data) => {
                data.json().then((json) => {
                resolve(json)
            }).catch((errors) => {
                reject()
                console.log(errors)
            })
        })
    })
    },
    vote: (electionId,candidateId) => {
        return new Promise((resolve,reject) => {
            fetch(`https://testsamheroku.herokuapp.com/api/vote/${electionId}/${candidateId}`, {
                method: 'POST',
                headers: {
                    "Authorization":"Bearer "+ localStorage.getItem('token')
                }
            }).then((data) => {
                data.json().then((json) => {
                    swal("Hop Hop",json.response);
                resolve(json)
            }).catch((errors) => {
                reject(errors)
                swal("Rejected","Please chose a candidate","error");
                console.log(errors)
            })
        })
    })
    }
    
}
