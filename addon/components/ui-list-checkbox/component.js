import Ember from 'ember';
import layout from './template';

const {
  computed,
  observer,
  on,
  run
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
    get() {
      return 'checkbox_' + this.get('id');
    }
  }),

  id: computed('itemId', {
    get() {
      return this.get('content.id');
    }
  }),

  registerOnParent: on('init', function() {
    run.scheduleOnce('afterRender', this, () => {
      this.set('content.isSelected', false);
      this.sendAction('registerToggle', this);
    });
  }),

  deregisterOnParent: on('willDestroyElement', function() {
    this.sendAction('deregisterToggle', this);
  })

});
