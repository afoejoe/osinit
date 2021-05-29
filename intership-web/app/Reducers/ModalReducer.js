import { ModalActionTypes } from "../Actions/Consts";

const initialState = {
  get state() {
    return {
      openEdit: false,
      openDelete: false,
      openAdd: false,
      editData:null
    };
  },
};
export default function reducer(state = initialState.state, action) {
  switch (action.type) {
    case `${ModalActionTypes.ADD}`:
      return {
        ...state,
        openAdd: !state.openAdd,
      };
    case `${ModalActionTypes.EDIT}`:
      return {
        ...state,
        openEdit: !state.openEdit,
        editData:action.payload
      };
    case `${ModalActionTypes.DELETE}`:
      return {
        ...state,
        openDelete: !state.openDelete,
        deleteData:action.payload

      };
  }
  return state;
}
