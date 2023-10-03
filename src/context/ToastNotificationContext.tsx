// React
import { Dispatch, createContext, useReducer } from "react";
// Types
import { ChildrenType, ReducerActionsType, ToastNotificationType } from "../types/contextTypes";
import { reducer } from "./reducer";

export const ToastNotificationValueContext = createContext<ToastNotificationType[] | null>(null);
export const ToastNotificationDispatchContext = createContext<Dispatch<ReducerActionsType> | null>(
  null
);

const initState: ToastNotificationType[] = [];

export function ToastNotificationProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ToastNotificationDispatchContext.Provider value={dispatch}>
      <ToastNotificationValueContext.Provider value={state}>
        {children}
      </ToastNotificationValueContext.Provider>
    </ToastNotificationDispatchContext.Provider>
  );
}
