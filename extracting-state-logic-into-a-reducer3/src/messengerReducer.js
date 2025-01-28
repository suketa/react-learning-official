export const initialState = {
  selectedId: 0,
  messages: {0 : 'Hello!'},
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      const newMessages = {...state.messages, [state.selectedId]: action.message};
      return {
        ...state,
        messages: newMessages,
      };
    }
    case 'sent_message': {
      const newMessages = {...state.messages, [state.selectedId]: ''};
      return {
        ...state,
        messages: newMessages,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
