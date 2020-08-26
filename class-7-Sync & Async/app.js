console.log(`js is running`)

// example # 1

// function anyfunc(){
//     return true;
// }

// function resolve(){
//    // console.log("success")
//    return "process 1"


// }
// function reject(){
//     console.log("failure")

// }
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// anyfunc() ? resolve():reject()
//     },2000)

// })
// promise.then(resolve)
// .then((str)=>{
//     return str
// })
// .then((str)=>{
//     console.log(str)
// })
// .catch(reject)
// console.log(`hello world`)


// example # 2

function anyfunc(){
        return true;
    }

    function resolve(){
        console.log("success")


    }
    function reject(){
        console.log("failure")

    }
function apiFetch(){

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        anyfunc() ? resolve() : reject()
    },1000)
})
return promise;
}
async function _asyncJS(){
        let data=await apiFetch();
        console.log(data)
        console.log(`running after async`)
}

_asyncJS()