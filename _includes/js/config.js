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
      url: ({basename}) => `${basename ? `/${basename}` : ''}/biodiversity-of-porto`,
      isHref: true,
      route: '/biodiversity-of-porto' // the route you are currently using for occurrence search
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "gadmGid",
          "value": "COL.5.1_2"
        },
      ]
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey'],
    mapSettings: {
      zoom: 11.78,
      lng: -8.6291,
      lat: 41.1579
    }
  }
};
