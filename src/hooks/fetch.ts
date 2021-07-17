import { useEffect, useState } from 'react'
import Recipe from '../types/Recipe'
import useAlerts from './useAlerts'

const apiRoot = 'http://localhost:3001'

const useFetch = <T>(url: string, friendlyError?: string) => {
    if (url.startsWith('/'))
        url = `${apiRoot}${url}`

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<T>()
    const { error } = useAlerts()

    useEffect(() => {      
        const setError = (err: string) => {
            console.error(`${friendlyError ? `${friendlyError}: `: ''} ${err}`)
            error(friendlyError || err)
        }
        const fetchData = async () => {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                if (data) {
                    setData(data)
                } else {
                    setError('The request was successful, but no data was returned')
                }
            } else {
                setError(`${response.status}: ${response.statusText}`)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url, friendlyError, error])

    return { isLoading, data }
}

const useRecipes = () => {
    return useFetch<Recipe[]>('/recipes', 'Could not get recipes')
}

const useRecipe = (id: string) => {
    return useFetch<Recipe>(`/recipes/${id}`, 'Could not get recipe')
}

export default useFetch

export {
    useRecipes,
    useRecipe,
}