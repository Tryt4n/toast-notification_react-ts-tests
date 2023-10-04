import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToastNotificationProvider } from "../context/ToastNotificationContext";
import ToastNotification from "./ToastNotification";

describe("#ToastNotification Component", () => {
  it("should render a toast notification with given text and id", () => {
    render(
      <ToastNotificationProvider>
        <ToastNotification
          text="Test notification"
          id="123"
        />
      </ToastNotificationProvider>
    );
    const toastNotification = screen.getByText("Test notification");
    expect(toastNotification).toBeInTheDocument();
  });

  it('should render default text "I am a toast" when the text prop is an empty string', () => {
    render(
      <ToastNotificationProvider>
        <ToastNotification
          text=""
          id="123"
        />
      </ToastNotificationProvider>
    );
    const toastNotification = screen.getByText("I am a toast");
    // expect(toastNotification).toBeInTheDocument();
    expect(toastNotification).toBeInTheDocument();
  });

  it("should throw an error when the id prop is not provided", () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(<ToastNotification text="Test notification" />);
    }).toThrowError(
      "useToastNotificationDispatch must be used within a ToastNotificationDispatchProvider"
    );
  });
});
