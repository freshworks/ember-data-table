import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'thead',
  activeColumn: null,
  resetSort: function () {
    var children = this.get('childViews'),
        component = this;

    this.$(children).each(function (idx, elm) {
      if (component.get('activeColumn') !== elm) {
        elm.set('sortType', null);
      }
    });
  }.observes('activeColumn'),

  //Action Names
  onSort: 'onSort',

  actions: {
    onSort: function (activeColumn) {
      this.set('activeColumn', activeColumn);

      // Sending to controller
      this.sendAction('onSort', {
        sort: this.get('activeColumn.sort'),
        sortType: this.get('activeColumn.sortType')
      });
    }
  }
});
