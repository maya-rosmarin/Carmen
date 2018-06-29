import * as flightAPIUtil from '../util/flights_api_util';
export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";

export const receiveFlights = flights => {
  return {
    type: RECEIVE_FLIGHTS,
    flights
  };
};

export const fetchFlights = () => {
  return dispatch => {
    return flightAPIUtil.fetchFlights().then(
      flights => {
        return dispatch(receiveFlights(flights));
      }
    );
  };
};
