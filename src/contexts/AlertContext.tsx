import React, { useState } from 'react'

type AlertContextType = {
    alerts: Alert[],
    success: (text: string) => void,
    warning: (text: string) => void,
    error: (text: string) => void,
    info: (text: string) => void,
}

export const AlertContext = React.createContext<AlertContextType>({
    alerts: [],
    success: () => {},
    warning: () => {},
    error: () => {},
    info: () => {},
})

type Alert = {
    status: AlertStatus
    text: string
}

enum AlertStatus {
    Success = 'SUCCESS',
    Warning = 'WARNING',
    Error = 'ERROR',
    Info = 'INFO'
}

const AlertProvider: React.FC = ({ children }) => {
    const [alerts, setAlerts] = useState<Alert[]>([])

    const success = (text: string) => addAlert(text, AlertStatus.Success)
    const warning = (text: string) => addAlert(text, AlertStatus.Warning)
    const error = (text: string) => addAlert(text, AlertStatus.Error)
    const info = (text: string) => addAlert(text, AlertStatus.Info)

    const addAlert = (text: string, status: AlertStatus) => {
        setAlerts(currentAlerts => [
            ...currentAlerts,
            { status, text }
        ])
    }

    return (
        <AlertContext.Provider
            value={{
                alerts,
                success,
                warning,
                error,
                info
            }}
        >
            { children }
        </AlertContext.Provider>
    )
}

export { AlertProvider }
export default AlertContext