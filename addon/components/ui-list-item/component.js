import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tbody',

  registerToggle: 'registerToggle',

  deregisterToggle: 'deregisterToggle',

  actions: {
    registerToggle: function (param) {  // propagate from ui-list-checkbox component
      this.sendAction('registerToggle', param);
    },
    deregisterToggle: function (param) { // propagate from ui-list-checkbox component
      this.sendAction('deregisterToggle', param);
    }
  }
});
