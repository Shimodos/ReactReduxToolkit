export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    text: true,
  },
  values: {
    title: '',
    date: '',
    text: '',
    tag: '',
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    case 'CLEAR_FORM':
      return {
        ...state,
        values: INITIAL_STATE.values,
      };
    case 'RESET_VALIDATION':
      return {
        ...state,
        isValid: INITIAL_STATE.isValid,
      };
    case 'SUBMIT': {
      const titleValidity = state.values.title?.trim().length;
      const textValidity = state.values.text?.trim().length;
      const dateValidity = state.values.date;
      return {
        ...state,
        isValid: {
          title: titleValidity,
          text: textValidity,
          date: dateValidity,
        },

        isFormReadyToSubmit: titleValidity && textValidity && dateValidity,
      };
    }
  }
}
