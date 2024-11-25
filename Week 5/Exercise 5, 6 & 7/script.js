const apiURL = "https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=demo";

let MSFTData = fetch(apiURL)
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(`EPS for '${data["symbol"]}' for Fiscal Year ending ${data["annualEarnings"][5]["fiscalDateEnding"]} : ${data["annualEarnings"][5]["reportedEPS"]}`);
    })
    .catch((error) => {
        console.error("Error: " + error);
    })
