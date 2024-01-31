

// GET
// const click=document.getElementById('click')
// click.addEventListener('click',print)
// async function print(){
// //    to send request use fetch keyword ,/ is very important
// // sending a request from the client
// // fetch('/get-data')
// // receive the response
// // send the object
// // respone object will return
// const respobj = await fetch('/get-data')// await fetch -> web api used to equest to the server
// // response object->json data
// const data = await respobj.json()
// console.log(data)
// }
const uname = document.getElementById('uname')
const pass=document.getElementById('pass')
const lb = document.getElementById('login')
lb.addEventListener('click',async function(){
//  const respobj = await fetch('/verify-user',{
//         method : "POST",// surely need to say to server about method for POst
//         body : JSON.stringify({//json.stringify change to json
//             "username" : "malar",
//             "password" : 1234
//         }),
//         headers : {
//             Accept : 'application/json',
//             'Content-Type' : 'application/json'
//         }
//     })
//     const data = await respobj.json()
//     console.log(data)
// .json asynchronous function->so use await
const respobj = await fetch('/verify-user',{
    method : "POST",// surely need to say to server about method for POst
    body : JSON.stringify({//json.stringify change to json
        "username" : uname.value,
        "password" : pass.value
    }),
    headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
    }
})
const data = await respobj.json()
console.log(data)
})

//post request
// const esponseobj = await fetch('/make-new-record',{
//     method : "POST",// surely need to say to server about method for POst
//     body : JSON.stringify({//json.stringify change to json
//         "username" : "malar",
//         "password" : 1234
//     }),
//     headers : {
//         Accept : 'application/json',
//         'Content-Type' : 'application/json'
//     }
// })