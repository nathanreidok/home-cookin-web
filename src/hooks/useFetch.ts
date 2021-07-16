import { useEffect, useState } from 'react'
import recipeService from '../services/recipeService'

const useFakeData = true

const useFetch = <T>(url: string) => {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState<T>()

    useEffect(() => {
        setStatus('fetching')   
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setStatus('fetched')
        }
        fetchData()
    }, [url])

    return { status, data }
}

export default useFetch