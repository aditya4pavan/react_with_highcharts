const url = 'https://api.random.org/json-rpc/1/invoke'


export const GenerateNumbers = (count) => {
    let params =
    {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "25828910-e38d-441f-b5e0-aca187a44806",
            "n": count,
            "min": -100,
            "max": 1000
        },
        "id": 1
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(resp => {
        if (resp.ok)
            return resp.json()
        else
            throw resp
    })
}