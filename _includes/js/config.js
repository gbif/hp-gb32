var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d6b11b',
    fontSize: '16px'
  }
});

var siteConfig = {
  maps: {
    defaultMapStyle: 'NATURAL', // what is the default style
  },
  routes: {
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/biodiversity-of-canberra`,
      isHref: true,
      route: '/biodiversity-of-canberra' // the route you are currently using for occurrence search
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "gadmGid",
          "value": "AUS.2.1_1"
        },
      ]
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey'],
    mapSettings: {
      zoom: 11.78,
      lng: 149.1200429101405,
      lat: -35.31902952444375
    }
  }
};
