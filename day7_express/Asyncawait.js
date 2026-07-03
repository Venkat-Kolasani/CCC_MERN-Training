function connectionDatabase(){
    return new Promise(resolve => {

    })
}

async function startServer(){
    console.log("Server Starting");
    const result = await connectionDatabase();
    console.log(result);
    console.log("Server Ready");
}

startServer();