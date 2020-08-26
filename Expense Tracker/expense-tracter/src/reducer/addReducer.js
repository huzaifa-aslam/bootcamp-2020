import { initialTransaction } from "../globalContext/Context";

const addReducer = (state, action) => {
  switch (action.type) {
    // case "DELETE_TRANSACTION":
    //   const deletedNotes = initialTransaction.filter(
    //     (note) => note.id !== action.payload
    //   );
    //   return {
    //     // ...state,
    //     initialTransaction: deletedNotes,
    //   };

    //  case 'DELETE_TRANSACTION':
    //   const deletedNotes=state.filter(
    //     note=>
    //       note.id !==action.payload

    //   );
    //   return{
    //     ...state,
    //     initialTransaction:deletedNotes
    //   }

    // case 'ADD_TRANSACTION':
    //   return {
    //     ...state,
    //     initialTransaction:[action.payload,...state]
    //   }

    case "ADD_TRANSACTION": {
      return [action.payload, ...state];
    }

    default:
      return state;
  }
};
export default addReducer;
