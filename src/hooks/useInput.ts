import { ChangeEvent, useState } from 'react'

export const useInput = (initialValue: string) => {
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