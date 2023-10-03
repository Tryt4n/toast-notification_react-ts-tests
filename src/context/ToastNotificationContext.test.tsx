import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  ToastNotificationDispatchContext,
  ToastNotificationProvider,
  ToastNotificationValueContext,
} from "./ToastNotificationContext";
import { useContext } from "react";

describe("#Toast Notification Context", () => {
  it("should render children when provided", () => {
    const children = <div>Test Children</div>;

    render(<ToastNotificationProvider>{children}</ToastNotificationProvider>);

    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("should provide ToastNotificationType[] to children", () => {
    const TestComponent = () => {
      const data = useContext(ToastNotificationValueContext);
      expect(data).toEqual(expect.any(Array));
      return null;
    };

    render(
      <ToastNotificationProvider>
        <TestComponent />
      </ToastNotificationProvider>
    );
  });

  it("should provide Dispatch<ReducerActionsType> to children", () => {
    const TestComponent = () => {
      const dispatch = useContext(ToastNotificationDispatchContext);
      expect(dispatch).toEqual(expect.any(Function));
      return null;
    };

    render(
      <ToastNotificationProvider>
        <TestComponent />
      </ToastNotificationProvider>
    );
  });

  it("should not break if children is undefined", () => {
    expect(() => {
      render(<ToastNotificationProvider />);
    }).not.toThrow();
  });
});
