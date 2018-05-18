import { combineReducers } from 'redux';
import dateFns from 'date-fns';
import providerOverview, * as providerSelectors from './providerOverview';
import { LOAD_PROVIDERS } from '../common/constants';

const defaultDaySlot = {
  selectedDay: dateFns.format(new Date(), 'YYYY-MM-DD'),
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
