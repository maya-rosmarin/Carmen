import $ from 'jquery';

// will take in arriving or departing time and arriving/departing airports as arguments
export const fetchFlights = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.flightstats.com/flex/schedules/rest/v1/jsonp/from/ABQ/to/DFW/arriving/2018/6/28/?appId=aab033ab&appKey=5734abd0d9cfd70ba01a0898f1c5ed12',
    dataType: 'jsonp',
  });
};
