import { Dispatch, ReactElement } from "react";

export type ActionsType = {
  ADD_NOTIFICATION_TO_LIST: "addNotificationToList";
  REMOVE_NOTIFICATION_FROM_LIST: "removeNotificationFromList";
};

export type ChildrenType = { children?: ReactElement | ReactElement[] };

export type ToastNotificationType = {
  id: string;
  text: string;
};

export type ReducerActionsType =
  | {
      type: "addNotificationToList";
      payload: ToastNotificationType;
    }
  | {
      type: "removeNotificationFromList";
      payload: string;
    };

export type ContextType = {
  state: ToastNotificationType[];
  dispatch: Dispatch<ReducerActionsType>;
};
