import { describe, expect, it } from "vitest";
import { ReducerActionsType, ToastNotificationType } from "../types/contextTypes";
import { REDUCER_ACTIONS, reducer } from "./reducer";

describe("#reducer function", () => {
  it("should add a toast to the list when action type is 'addNotificationToList'", () => {
    const state: ToastNotificationType[] = [];
    const action: ReducerActionsType = {
      type: REDUCER_ACTIONS.ADD_NOTIFICATION_TO_LIST,
      payload: {
        id: "1",
        text: "Notification 1",
      },
    };

    const result = reducer(state, action);

    expect(result).toEqual([
      {
        id: "1",
        text: "Notification 1",
      },
    ]);
  });

  it("should return the same state when action type is not recognized", () => {
    const initialState: ToastNotificationType[] = [{ id: "1", text: "Notification 1" }];
    const action: ReducerActionsType = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: "unknownAction",
      payload: { id: "2", text: "Notification 2" },
    };

    expect(() => reducer(initialState, action)).toThrowError("Invalid action type");
  });

  it("should return the same state when the notification to remove is not found", () => {
    const state: ToastNotificationType[] = [
      {
        id: "1",
        text: "Notification 1",
      },
      {
        id: "2",
        text: "Notification 2",
      },
    ];
    const action: ReducerActionsType = {
      type: REDUCER_ACTIONS.REMOVE_NOTIFICATION_FROM_LIST,
      payload: "3",
    };

    const result = reducer(state, action);

    expect(result).toEqual([
      {
        id: "1",
        text: "Notification 1",
      },
      {
        id: "2",
        text: "Notification 2",
      },
    ]);
  });

  it("should remove a notification from the list when action type is 'removeNotificationFromList'", () => {
    const state: ToastNotificationType[] = [
      {
        id: "1",
        text: "Notification 1",
      },
      {
        id: "2",
        text: "Notification 2",
      },
    ];
    const action: ReducerActionsType = {
      type: REDUCER_ACTIONS.REMOVE_NOTIFICATION_FROM_LIST,
      payload: "1",
    };

    const result = reducer(state, action);

    expect(result).toEqual([
      {
        id: "2",
        text: "Notification 2",
      },
    ]);
  });

  it("should throw an error when the action type is invalid", () => {
    const state: ToastNotificationType[] = [];
    const action: ReducerActionsType = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: "invalidActionType",
      payload: {
        id: "1",
        text: "Notification 1",
      },
    };

    expect(() => reducer(state, action)).toThrowError("Invalid action type");
  });
});
