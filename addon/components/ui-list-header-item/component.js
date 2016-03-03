import Ember from 'ember';
import layout from './template';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  attributeBindings: ['rowspan', 'colspan'],
  layout: layout,
  tagName: 'th',
  classNameBindings: ['sortType', 'isSortable:sortable', 'isActiveColumn:active'],
  isSortable: false,

  bindSort: function () {
    var sort = this.get('sort'),
        component = this;

    if (sort) {
      this.set('isSortable', true);
      this.$().bind('click', function () {
        component.toggleOrderBy();
      });
    }

    // Initial Sort
    if (this.get('sortType')) {
      this.send('sortBy');
    }
  }.on('didInsertElement'),

  unBindSort: function () {
    this.$().unbind('click');
  }.on('willDestroyElement'),

  // Computed Properties
  isActiveColumn: computed('parentView.activeColumn', {
    get: function () {
      return this.get('parentView.activeColumn') === this;
    }
  }),

  toggleOrderBy: function () {
    var sortType = this.get('sortType') || 'asc';
    this.set('sortType', (sortType === 'asc') ? 'desc' : 'asc');
    this.send('sortBy');
  },

  // Actions
  actions:{
    sortBy: function () {
      this.get('parentView').send('onSort', this);
    }
  }
});
