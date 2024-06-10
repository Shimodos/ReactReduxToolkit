export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    text: true,
  },
  valuse: {
    title: undefined,
    date: undefined,
    text: undefined,
  },
  isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'RESET_VALIDATION':
      return {
        ...state,
        isValid: INITIAL_STATE.isValid,
      };
    case 'SUBMIT': {
      const titleValidity = action.payload.title?.trim().length;
      const textValidity = action.payload.text?.trim().length;
      const dateValidity = action.payload.date;
      return {
        ...state,
        values: action.payload,
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
