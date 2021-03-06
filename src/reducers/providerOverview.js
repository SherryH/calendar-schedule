import dateFns from 'date-fns';
import { LOAD_PROVIDERS } from '../common/constants';

const defaultOverview = [
  {
    Id: 'e538c28d-52df-0654-800f-6145909aca28',
    Title: 'General Practitioner',
    Name: 'Dr. John Smith',
    AvailableSlots: [''],
    PictureURL: '/api/Picture/e538c28d-52df-0654-800f-6145909aca28'
  },
  {
    Id: '40abb954-2f57-4106-61ec-ddf2acfbf8ed',
    Title: 'General Practitioner',
    Name: 'Dr. Mary Aniston',
    AvailableSlots: [''],
    PictureURL: '/api/Picture/40abb954-2f57-4106-61ec-ddf2acfbf8ed'
  },
  {
    Id: '8dfe2600-52d5-3b80-129a-45d796fbaefd',
    Title: 'General Practitioner',
    Name: 'Dr. Mary Aniston',
    AvailableSlots: [''],
    PictureURL: '/api/Picture/8dfe2600-52d5-3b80-129a-45d796fbaefd'
  }
];

const providerOverview = (state = defaultOverview, action) => {
  switch (action.type) {
    case LOAD_PROVIDERS: {
      return JSON.parse(action.payload.providers);
    }
    default:
      return state;
  }
};

const filterSlotsByPeriod = (slots, period) => {
  const periodObj = { Morning: [0, 12], Afternoon: [12, 16], Evening: [16, 24] };
  const { selectedPeriod } = period;
  const [minHr, maxHr] = periodObj[selectedPeriod];
  const slotByPeriod = slots.filter(slot => new Date(slot).getHours() >= minHr && new Date(slot).getHours() < maxHr);
  return slotByPeriod.length === 0 ? [] : slotByPeriod.map(slot => dateFns.format(new Date(slot), 'HH:mm'));
};

export const getProviders = (selectedDayPeriod, providers) =>
  providers.map((provider) => {
    const slots = Object.values(provider.AvailableSlots);
    const AvailableSlotsInPeriod = filterSlotsByPeriod(slots, selectedDayPeriod);
    const newProvider = { ...provider, AvailableSlots: AvailableSlotsInPeriod };
    return newProvider;
  });

export default providerOverview;
