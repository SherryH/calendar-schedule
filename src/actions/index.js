import { LOAD_PROVIDERS, PATH_HOST, SELECT_PERIOD } from '../common/constants';

export const loadProvidersAsync = selectedDay => (dispatch) => {
  fetch(`${PATH_HOST}/api/Schedule/${selectedDay}`)
    .then(res => res.json())
    .then((providers) => {
      dispatch({
        type: LOAD_PROVIDERS,
        payload: { providers, selectedDay }
      });
    })
    .catch((error) => {
      console.error('ERROR LOADING PROVIDERS', error);
    });
};

export const getSlotsByPeriod = period => ({
  type: SELECT_PERIOD,
  payload: { selectedPeriod: period }
});
