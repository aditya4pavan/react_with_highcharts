import { GenerateNumbers } from '../REST/random'

// Action Name
export const LOAD_DATA = 'LOAD_DATA'

// Send Random Data to Display on Charts
export const loadData = (random) => {
    return {
        type: LOAD_DATA,
        random
    }
}

// Async Action to Get data and Dispatch Action
export const getData = (count) => {
    return (dispatch) => GenerateNumbers(count).then(response => {
        if (response.result && response.result.random)
            dispatch(loadData(response.result.random.data))
        else
            throw data
    }).catch(ex => {
        console.log(ex)
    })
}

