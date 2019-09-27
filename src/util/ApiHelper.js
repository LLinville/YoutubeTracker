import gapi from 'gapi'

export default class SubscriptionStorage {
  constructor () {
    this.apiKey = 'AIzaSyCuqaL3N6pOc2iJJFi8D93jNaUXDLq9vsM';
    this.clientId = '561640955159-j0f3d4nqanifhan9uct5r3br8rreqi4u.apps.googleusercontent.com';
    this.initClient();
  };

  initClient () {
    // Retrieve the discovery document for version 3 of YouTube Data API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
    var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
      'apiKey': this.apiKey,
      'discoveryDocs': [discoveryUrl],
      'clientId': this.clientId,
      'scope': SCOPE
    }).then(function () {
      console.log('after init');
    });
  }

  getSubscribedChannels () {
    var rq = {
        part: 'id,contentDetails,subscriberSnippet,snippet',
        mine: true,
        maxResults: 50
    };
    if (token) { // If we got a token from previous call
        rq.pageToken = token; // .. attach it to the new request
    }

    this.subscriptionPagePromises = [];

    var request = gapi.client.youtube.subscriptions.list(rq);
    
    request.then(function(response) {
        console.log(response.items);
        rq.pageToken = token;
        this.subscriptionPagePromises.push(
          gapi.client.youtube.subscriptions.list(rq)
            .then((response) => {
              if(response.token){ 
                getSubscribedChannels(response.token);
              }
            });

        );
        var next = response.nextPageToken; // get token for next page
        if (next) { // if has next
            get_subscriptions(next); // recurse with the new token
        }
    })
  }


}

// <script src="https://apis.google.com/js/api.js"></script>
// <script>
// function start() {
//   // 2. Initialize the JavaScript client library.
//   gapi.client.init({
//     'apiKey': 'YOUR_API_KEY',
//     // clientId and scope are optional if auth is not required.
//     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     return gapi.client.request({
//       'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
//     })
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);
// </script>
