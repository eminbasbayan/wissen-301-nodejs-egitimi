const hello = (name) => {
 console.log(`Hello ${name}`);
}


const helloName = (first, callback) =>{
    const name = "Emin"
    callback(name)
}

helloName(hello)