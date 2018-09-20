import { GenerateNumbers } from '../REST/random'

export const LOAD_DATA = 'LOAD_DATA'

export const loadData = (random) => {
    return {
        type: LOAD_DATA,
        random
    }
}

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

