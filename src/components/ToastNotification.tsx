// Context
import { useToastNotificationDispatch } from "../context/useToastNotification";
import { REDUCER_ACTIONS } from "../context/reducer";

type ToastNotificationPropsType = {
  text: string;
  id: string;
};

export default function ToastNotification({ text, id }: ToastNotificationPropsType) {
  const dispatch = useToastNotificationDispatch();

  return (
    <div
      className="toast"
      onClick={() => dispatch({ type: REDUCER_ACTIONS.REMOVE_NOTIFICATION_FROM_LIST, payload: id })}
    >
      {text === "" ? "I am a toast" : text}
    </div>
  );
}
