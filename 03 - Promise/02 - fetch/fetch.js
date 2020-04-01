// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)

function fetchData() {
  url = 'https://api.github.com/users';
  fetch(url).then((response)=> {
    return response.json();
  }).then((data) => {
    console.log(data);
  }).catch(()=> console.error('error'))
}

fetchData()
