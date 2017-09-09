'use babel';

import autocompleteProvider from './autocomplete-provider'

export default {
  activate(state) {
  },

  deactivate() {
  },

  serialize() {
    return {}
  },

  JSXCompleteProvider(args) {
    console.log('autocomplete provider', args, autocompleteProvider);
    return autocompleteProvider
  }

};
