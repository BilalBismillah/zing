import { DirectoryStateArray, reduce as DirectoryStateReducer } from "./DirectoryState";

import type { AppState as FlexAppState } from "@twilio/flex-ui";
import { combineReducers } from "redux";

export const namespace = "directory-state"

export interface AppState {
    flex: FlexAppState;
    [namespace]: {
        DirectoryState: DirectoryStateArray
        
    };
}

export const reducers = combineReducers({
    DirectoryState: DirectoryStateReducer
});