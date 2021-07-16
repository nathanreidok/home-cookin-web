import { ChangeEvent, useState } from 'react'

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                setValue(e.target.value)
            }
        }
    }
}

export default useInput