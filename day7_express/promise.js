// promise for future tasks and result

const connectionDatabase = 
new Promise(resolve,reject) => {
    let connected = true;
    if(connected){
        resolve("MongoDb Connected");
    }
    else{
        //failed connection else block
        reject("MongoDb not connected");
    }
}

connectionDatabase.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});
