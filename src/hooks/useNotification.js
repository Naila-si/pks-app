// src/hooks/useNotification.js
import { useState, useCallback } from 'react';
import { dataService } from '../services/dataService';

export function useNotification() {
  const [notifications, setNotifications] = useState(() => dataService.getNotifications());

  const refreshNotifications = useCallback(() => {
    setNotifications(dataService.getNotifications());
  }, []);

  const markAsRead = useCallback((id) => {
    const success = dataService.markNotificationAsRead(id);
    if (success) {
      refreshNotifications();
    }
    return success;
  }, [refreshNotifications]);

  const getUnreadCount = useCallback(() => {
    return notifications.filter(n => !n.dibaca).length;
  }, [notifications]);

  return {
    notifications,
    refreshNotifications,
    markAsRead,
    getUnreadCount
  };
}
