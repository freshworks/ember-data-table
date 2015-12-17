import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  classNames: ['table', 'table-hover'],

  actions: {
    updateModel: function (params) {
      console.log(params);
      this.sendAction();
    },
    bulkDelete: function () {}
  }
});
