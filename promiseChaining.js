// restuarant order management
const order = (...orderItems)=>{
    const promise = new Promise((resolve,reject)=>{
        if(orderItems.length > 0){
            console.log("Your order items are :");
            orderItems.forEach(element => {
                console.log(element);
            });

            resolve("Please wait some time.");
        }else{
            reject("Please order some items.");
        }
    });
    return promise;
}

const checkAvailability = ()=>{
    const availabe = true;
    const promise = new Promise((resolve,reject)=>{
        if(availabe){
            resolve("You order has been confirmed successfully.");
        }else{
            reject("Sorry not available.");
        }
    });
    return promise;
}

const cooking = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Cooking has been completed.");
        },5000);
    });
    return promise;
}

const delivery = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Order has been successfully delivered to customer.");
    },2000);
    });
    return promise;
}

// promise call using chaining
order('burger','coke')
.then((res)=>{
    console.log(res);
})
.then(checkAvailability)
.then((res)=>{
    console.log(res);
})
.then(cooking)
.then((res)=>{
    console.log(res);
})
.then(delivery)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Thank You !!");
})