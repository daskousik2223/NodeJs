//Demo - Async code and promises

//Async code
const fetchData = callback => {
    setTimeout (() =>{
        callback ('Done after 3 seconds');
    }
    , 3000);
}

console.log('Wait for the timeout to be over');

setTimeout (() =>{
    console.log('Printing after 3 seconds');
    fetchData(text =>{
        console.log(text);
    });
}, 3000);


//Usage of promise

const fetchDataPromise = () =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Done after 4 seconds');
        })
    },4000);
    return promise
}

setTimeout(() => {
    console.log('Printing the log for promise example after 8 seconds');
    fetchDataPromise().then(text =>{
        console.log(text);
    });
}, 8000);

console.log('Waiting for the timer to finish');
console.log('Still waiting');

