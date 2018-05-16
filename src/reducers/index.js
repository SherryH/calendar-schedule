import { combineReducers } from 'redux';

const defaultDaySlot = {
  selectedDay: '2018-05-11',
  selectedDaySlot: 'Morning'
};
const selectedDaySlot = (state = defaultDaySlot, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const defaultOverview = [
  {
    Id: 'e538c28d-52df-0654-800f-6145909aca28',
    Title: 'General Practitioner',
    Name: 'Dr. John Smith',
    AvailableSlots: {},
    PictureURL: '/api/Picture/e538c28d-52df-0654-800f-6145909aca28'
  },
  {
    Id: '40abb954-2f57-4106-61ec-ddf2acfbf8ed',
    Title: 'General Practitioner',
    Name: 'Dr. Mary Aniston',
    AvailableSlots: {},
    PictureURL: '/api/Picture/40abb954-2f57-4106-61ec-ddf2acfbf8ed'
  },
  {
    Id: '8dfe2600-52d5-3b80-129a-45d796fbaefd',
    Title: 'General Practitioner',
    Name: 'Dr. Mary Aniston',
    AvailableSlots: {},
    PictureURL: '/api/Picture/8dfe2600-52d5-3b80-129a-45d796fbaefd'
  }
];

const providerOverview = (state = defaultOverview, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectedDaySlot,
  providerOverview
});

export default reducer;
