import Ember from 'ember';
import layout from './template';

const {
  computed,
  observer
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  content: {},

  isChecked: false,

  registerToggle: 'registerToggle',

  deregisterToggle: 'deregisterToggle',

  selectItem: observer('isChecked', function() {
    return this.toggleProperty('content.isSelected');
  }),

  itemId: computed('content', {
    get: function() {
      return 'checkbox_' + this.get('id');
    }
  }),

  id: computed('itemId', {
    get: function () {
      return this.get('content.id');
    }
  }),

  registerOnParent: function() {
    this.set('content.isSelected', false);
    this.sendAction('registerToggle', this);
  }.on('didInsertElement'),

  deregisterOnParent: function() {
    this.sendAction('deregisterToggle', this);
  }.on('willDestroyElement')

});
