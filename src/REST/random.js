// HTTP Request for Random Numbers

const url = 'https://api.random.org/json-rpc/1/invoke'


export const GenerateNumbers = (count) => {
    let params =
    {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "25828910-e38d-441f-b5e0-aca187a44806", // Key needs to be changed here 
            "n": count, // Count will be the Number of Intervals
            "min": -100, // Given Min Value 
            "max": 1000 // Given Max Value
        },
        "id": 1
    }// Parameters Required as Per API
    return fetch(url, {
        method: 'POST', // API Specifically requested for POST
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(resp => {
        if (resp.ok) // If Response is 200 else Throw
            return resp.json()
        else
            throw resp
    })
}