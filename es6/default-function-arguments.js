// function makeAjaxRequest(url, method) {
//     if(!method) {
//         method = 'GET';
//     }
// }

function makeAjaxRequest(url, method = 'GET') {
 return method;  
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));