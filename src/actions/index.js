import { LOAD_PROVIDERS, PATH_HOST } from '../common/constants';

export const loadProvidersAsync = selectedDay => (dispatch) => {
  console.log('pathchost', PATH_HOST);
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

export const dummy = () => {};
