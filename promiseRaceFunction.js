// define promise 1

const promise1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Take 2 sec to resolve promise 1");
    },2000);

});

// define promise 2
const promise2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Take 1 sec to resolve promise 2");
    },1000);

});

// promise race function 
Promise.race([promise1,promise2])
.then((res)=>{ console.log(res);
})
.catch((err)=>{
    console.log(err);
});