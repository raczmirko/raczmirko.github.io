import React, { createContext, useContext, useState } from 'react';
import Notification from './Notification';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({ isOpen: false, alertType: '', alertText: '' });

    const showNotification = (type, message) => {
    setNotification({ isOpen: true, alertType: type, alertText: message });
    };

    const closeNotification = () => {
    setNotification({ ...notification, isOpen: false });
    };

    return (
        <NotificationContext.Provider value={showNotification}>
            {children}
            <Notification
                alertType={notification.alertType}
                alertText={notification.alertText}
                isOpen={notification.isOpen}
                setIsOpen={closeNotification}
            />
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    return useContext(NotificationContext);
};

export default NotificationProvider;
