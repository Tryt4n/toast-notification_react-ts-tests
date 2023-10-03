import { ActionsType, ReducerActionsType, ToastNotificationType } from "../types/contextTypes";

export const REDUCER_ACTIONS: ActionsType = {
  ADD_NOTIFICATION_TO_LIST: "addNotificationToList",
  REMOVE_NOTIFICATION_FROM_LIST: "removeNotificationFromList",
};

export function reducer(state: ToastNotificationType[], action: ReducerActionsType) {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_NOTIFICATION_TO_LIST: {
      const newNotification = action.payload;

      if (newNotification) {
        return [...state, newNotification];
      } else return [...state];
    }

    case REDUCER_ACTIONS.REMOVE_NOTIFICATION_FROM_LIST: {
      const notificationIDToRemove = action.payload;

      if (notificationIDToRemove) {
        const updatedNotificationList = state.filter(
          (notification) => notification.id !== notificationIDToRemove
        );

        return updatedNotificationList;
      } else return [...state];
    }

    default:
      throw new Error("Invalid action type");
  }
}
