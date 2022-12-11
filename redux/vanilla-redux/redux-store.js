// &Action Creator -  Person submitting he form
// !Action will have 2 Parameters - Type and Payload

const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

//~Reducers
//!Reservation History

const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((ele) => {
      return ele !== action.payload.name;
    });
  }
  return oldReservationList;
};

//!Cancellation History
const cancellationHistory = (oldcancellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldcancellationList, action.payload];
  }
  return oldcancellationList;
};

//!Get Refund
const totalAmount = (amount = 1000, action) => {
  if (action.type === "NEW_BOOKING") {
    return amount + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return amount - action.payload.refundAmount;
  }
  return amount;
};

//~Redux Store
//! Uses createStore and combineReducers from redux object

const { createStore, combineReducers } = Redux;

const centralStore = combineReducers({
  totalAmount: totalAmount,
  reservationHistory: reservationHistory,
  cancellationHistory: cancellationHistory,
});

const store = createStore(centralStore);

//! Dispatch Action

const action = newBooking("Pati", 20);
store.dispatch(action);

store.dispatch(newBooking("Adi", 100));
store.dispatch(newBooking("Biswa", 300));
store.dispatch(cancelBooking("Mano", 10));
console.log(store.getState());
