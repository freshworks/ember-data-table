import Ember from 'ember';
import layout from './template';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNameBindings: ['isActive:active'],
  seperator: '…',

  url: computed('urlTemplate', 'page', {
    get: function () {
      var urlTemplate = this.get('urlTemplate');
      var current = this.get('page');

      urlTemplate = urlTemplate.replace('{current}', current);

      return urlTemplate;
    }
  }),

  isActive: computed('page', 'selected', {
    get: function () {
      return this.get('page') === this.get('selected');
    }
  }),

  isDots: computed('page', {
    get: function () {
      var seperator = this.get('seperator');
      var page = this.get('page');

      return page === seperator;
    }
  }),

  actions: {
    setCurrent: function () {
      var last = this.get('selected');
      var page = this.get('page');

      if (page !== last) {
        this.set('selected', page);
        this.sendAction('pageSet', page, last);
      }
    }
  }
});
