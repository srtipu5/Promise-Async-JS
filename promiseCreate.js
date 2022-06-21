// three types of promises are pending, resolve and rejected

let hasMeeeting = true;
let date = new Date();

//promise create start
const promise = new Promise((resolve,reject)=>{
    let time = date.getDate()+5 + "/" + date.getMonth()+ "/" + date.getFullYear();
    if(hasMeeeting){
        resolve(`Meeting has been scheduled at ${time}`);
    }else{
        reject("There have no meeting Scheduled yet");
    }
});

//promise create end

//promise call start
promise
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

//promise call end