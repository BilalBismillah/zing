import { any, string } from "prop-types";
import { AnyAction } from "redux";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const TOGGLE_SHOW_CANNED_RESPONSES = "SET_SHOW_CANNED_RESPONSES";
const ADD_DIRECTORY = "ADD_DIRECTORY";
const DELETE_DIRECTORY = "DELETE_DIRECTORY";
const UPDATE_DIRECTORY = "UPDATE_DIRECTORY";


// type myAction = Action & {payload: string};
export type Entry = {id: string, team: string, name: string; number: string}

export interface DirectoryStateArray {
    entries: Entry[];
}

const initialState: DirectoryStateArray = {
    entries: [{id: "1", team: "sales", name:"Third Party", number:"+44770077777"}]
}

export class Actions {

    public static addEntry = (id: string, team: string, name: string, number:string): AnyAction => ({ type: ADD_DIRECTORY, payload: {team, name, number}})

    public static deleteEntry = (id: string): AnyAction => ({type: DELETE_DIRECTORY, payload: {id} })

    public static updateEntry = (id: string, team: string, name: string, number:string): AnyAction => ({type: UPDATE_DIRECTORY, payload: {id, team, name, number}});
}


const URLbase = "http://localhost:3100"
export function reduce(state: DirectoryStateArray = initialState, action: AnyAction)  {
    switch(action.type) {
        // case TOGGLE_SHOW_CANNED_RESPONSES: {
        //         return state;
        //         //showCannedResponses: state.showCannedResponses
        //     }

        case ADD_DIRECTORY: {
          const id = uuidv4();
          const name = action.payload.name;
          const team = action.payload.team;
          const number = action.payload.number;

          axios.post(`${URLbase}/add-response`, {id, team, name, number})
          .catch((er) => {
            console.log(er);
          })
          return  {
            ...state,
            directories: [...state.entries, {id: id, name: action.payload.name, team: action.payload.team, number: action.payload.number}]
          }
        }


        case DELETE_DIRECTORY: {
          const id = action.payload.id;
          axios.post(`${URLbase}/delete-response`, {id})
          .then((res) => {
            console.log(res);
          })
          .catch((er) => {
            console.log(er)
          })
          return {
            ...state,
            directories: state.entries.filter((response) => response.id !== action.payload.id)
          }
        }


        case UPDATE_DIRECTORY: {
          axios.post(`${URLbase}/update-response`, {id: action.payload.id, name: action.payload.name, team: action.payload.team, number: action.payload.number})
          const updatedEntry = state.entries.map(entry => {
            if(action.payload.id === entry.id){
              return {...entry, team: action.payload.team, name: action.payload.name, number: action.payload.number};
            }
            return entry
          })
          return {
            ...state,
            entries: updatedEntry
          }
        }
        default:
            console.log("redux call")
            console.log(state);
            return state;
    }

    // case BULK

}