import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {

    // super.buildURL(...args) to invoke the
    // JSONAPIAdapter default implementation of buildURL
    return `${super.buildURL(...args)}.json`
  }
}
