var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d6b11b',
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      url: ({basename}) => `${basename ? `/${basename}` : ''}/biodiversity-of-bruxelle`,
      isHref: true,
      route: '/biodiversity-of-bruxelle' // the route you are currently using for occurrence search
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "gadmGid",
          "value": "BEL.1_1"
        },
      ]
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey'],
    mapSettings: {
      zoom: 10.290782035199692,
      lng: 4.378666162934309,
      lat: 50.83439252440547
    }
  }
};
