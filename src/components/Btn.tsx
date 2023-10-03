// React
import { FormEvent, useState } from "react";
// Context
import { useToastNotificationDispatch } from "../context/useToastNotification";
import { REDUCER_ACTIONS } from "../context/reducer";

export default function Btn() {
  const dispatch = useToastNotificationDispatch();

  const [inputText, setInputText] = useState("");

  function showNotification(e: FormEvent, text: string) {
    e.preventDefault();

    const notification = {
      id: crypto.randomUUID(),
      text,
    };

    dispatch({ type: REDUCER_ACTIONS.ADD_NOTIFICATION_TO_LIST, payload: notification });

    setTimeout(() => {
      dispatch({ type: REDUCER_ACTIONS.REMOVE_NOTIFICATION_FROM_LIST, payload: notification.id });
    }, 5000);

    setInputText("");
  }

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => showNotification(e, inputText)}
    >
      <label htmlFor="inputText">Enter Toast Text</label>
      <br />
      <input
        type="text"
        name="inputText"
        id="inputText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Show Toast Notification</button>
    </form>
  );
}
