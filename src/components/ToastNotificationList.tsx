// Context
import { useToastNotificationValue } from "../context/useToastNotification";
// Components
import ToastNotification from "./ToastNotification";

type ToastNotificationPlacementType = {
  placement?:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
};

export default function ToastNotificationList({
  placement = "top-right",
}: ToastNotificationPlacementType) {
  const state = useToastNotificationValue();

  return (
    <>
      {state.length > 0 && (
        <div className={`toast-container ${placement}`}>
          {state.map((toast) => (
            <ToastNotification
              key={toast.id}
              id={toast.id}
              text={toast.text}
            />
          ))}
        </div>
      )}
    </>
  );
}
