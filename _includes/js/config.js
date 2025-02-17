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
      route: '/biodiversity-of-bogota' // the route you are currently using for occurrence search
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
      zoom: 10.4382664698,
      lng: -74.07363139589552,
      lat: 4.667173307296423
    }
  }
};
