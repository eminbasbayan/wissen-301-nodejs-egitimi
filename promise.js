function myPromise(number){
    return new Promise((resolve, reject)=>{
            if(number === 5){
                resolve([3,4])
            }else{
                reject("işlem başarısız. istenmeyen sayı!")
            }
    })
}

myPromise(5).then((data)=> console.log(data)).catch((err)=> console.log(err))
fetch("https://jsonplaceholder.typicode.com/todos").then((data)=> data.json()).then((data)=> console.log(data))

