import { combineReducers } from 'redux';
import providerOverview, * as providerSelectors from './providerOverview';
import { LOAD_PROVIDERS } from '../common/constants';

const defaultDaySlot = {
  selectedDay: '2018-05-16',
  selectedPeriod: 'Afternoon'
};
const selectedDayPeriod = (state = defaultDaySlot, action) => {
  switch (action.type) {
    case LOAD_PROVIDERS: {
      return { selectedDay: action.payload.selectedDay, selectedPeriod: 'Morning' };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectedDayPeriod,
  providerOverview
});

export const getProviders = state => providerSelectors.getProviders(state.selectedDayPeriod, state.providerOverview);

export default reducer;
