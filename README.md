# calendar-schedule
This project shows the availability of clinical providers using Vensa API.
![Provider Availability](/img/vensa.png "Provider Availability")
## Quick Start
`npm install`
`npm start`
## Extra features to be implemented:
* Clicking on the dates on Header would fire a LOAD_PROVIDERS action which sets the "selectedDay" value in the store and loads new providers information
* Clicking on the calendar icon would display the date picker. After comparing date picker library from material-ui, airbnb, ant, React-component, I am inclined to use React-component date picker and style it to match with the prototype. React-component is a solid, well tested library and provides the most basic functionality, which makes it easier to customise to be of the style on the prototype. 
* Clicking on the date on the date picker will then trigger another LOAD_PROVIDERS action to load corresponding providers information in the corresponding date
* Clicking on the provider name on the first provider overview page will trigger a LOAD_PROVIDER_DETAIL action, which passes the provider ID to fetch the selected provider details, it will also set a state to open a material-ui modal to display the provider details.
* The material-ui modal to be styled to look the same as the prototype using css-in-js
* Tests will be added using Jest. Main focus will be placed on testing action creators and reducers. I will use identity-obj-proxy for testing with CSS Modules and moxios for testing async calls. I will also use snapshot testing for overall prototype pages.
## Some other thoughts:
* The header should have a shadow
* Load the initial data by firing LOAD_PROVIDERS from the configureStore.js instead of from componentDidMount in App.js. So that each of the components can use connect directly instead of passing props down multiple layers. (HeaderPeriodContainer currently gets action creators from connect and data from parent component. This should be standardised.
* Use Flow for static typing
* Instead of using CSS Modules, use CSS in JS throughout the project. (I had not used Material UI prior to this project and was not aware that they were using CSS in JS for styling.)
