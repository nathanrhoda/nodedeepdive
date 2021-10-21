let  promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve();
    }, 3000);    
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('But wait theres more'))
    .catch(() => console.log('error!'))

// const url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url)
//     .then(response => console.log(response.json()));