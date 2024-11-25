const apiURL = "https://jsonplaceholder.typicode.com/posts";
const data = {
    ticker: 'AAPL',
    name: 'Apple Inc',
    price: 171.48,
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
};

fetch(apiURL, requestOptions)
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {console.error(`Error encountered: ${err}`);})
