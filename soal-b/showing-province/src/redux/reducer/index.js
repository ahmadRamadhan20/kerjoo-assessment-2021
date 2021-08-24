const initialState = {
    provId: "",
    kabId: "",
    kecId: "",
    desaId: "",
};

export default function Reducer(state = initialState, action){
  switch (action.type) {
    case 'CHANGE_PROVINSI':
      return {
        ...state,
        provId: action.action,
      };
    case 'CHANGE_KABUPATEN':
      return {
        ...state,
        kabId: action.action,
      };
    case 'CHANGE_KECAMATAN':
      return {
        ...state,
        kecId: action.action,
      };
    case 'CHANGE_DESA':
      return {
        ...state,
        desaID: action.action,
      };
    default:
      return state;
  }    
}