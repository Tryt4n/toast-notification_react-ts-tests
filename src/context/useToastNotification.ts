import { useContext } from "react";
import {
  ToastNotificationDispatchContext,
  ToastNotificationValueContext,
} from "./ToastNotificationContext";

export function useToastNotificationValue() {
  const toastNotificationValueContext = useContext(ToastNotificationValueContext);
  if (toastNotificationValueContext == null) {
    throw new Error(
      "useToastNotificationValue must be used within a ToastNotificationValueProvider"
    );
  }

  return toastNotificationValueContext;
}
export function useToastNotificationDispatch() {
  const toastNotificationDispatchContext = useContext(ToastNotificationDispatchContext);
  if (toastNotificationDispatchContext == null) {
    throw new Error(
      "useToastNotificationDispatch must be used within a ToastNotificationDispatchProvider"
    );
  }

  return toastNotificationDispatchContext;
}
