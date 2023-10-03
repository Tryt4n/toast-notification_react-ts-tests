import Btn from "./components/Btn";
import ToastNotificationList from "./components/ToastNotificationList";
import { ToastNotificationProvider } from "./context/ToastNotificationContext";

export default function App() {
  return (
    <ToastNotificationProvider>
      <Btn />

      <ToastNotificationList placement="bottom-left" />
      <ToastNotificationList />
    </ToastNotificationProvider>
  );
}
