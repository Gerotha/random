function getValues() {
    var setup = {
      spreadsheetId: '130zKSslF0Sr4ZCoOWJN_jPeMiVO8R2lzJaS_FNQ01uY',
      range: 'Página1!A1:B'
    };

    
    var request = gapi.client.sheets.spreadsheets.values.get(setup);
    request.then(function(response) {
      // TODO: Change code below to process the `response` object:
      console.log(response.result);
    }, function(reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }

  function initClient() {
    var API_KEY = 'AIzaSyAxzmVZDCncosp4DeFQphi39xRhjoXdcSg';

    gapi.client.init({
      'apiKey': API_KEY,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(console.log('Deu bom!'));
  }

  function handleClientLoad() {
  gapi.load('client', initClient);
}