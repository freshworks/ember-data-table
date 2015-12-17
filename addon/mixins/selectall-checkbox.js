import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Mixin.create({
  toggles: computed({
    get: function(){
      return Ember.A([]);
    }
  }),

  allChecked: computed('toggles.@each.isChecked', {
    get: function () {
      var toggles = this.get('toggles');
      return toggles.length > 0 && toggles.isEvery('isChecked');
    },
    set: function (key, value) {
      this.get('toggles').setEach('isChecked', value);
      return value;
    }
  }),

  allSelectedItems: computed.filterBy('toggles', 'isChecked', true),

  totalSelectedCount: computed.alias('allSelectedItems.length'),

  allSelectedItemsIds: computed.mapBy('allSelectedItems', 'id'),

  isBulkSelection: computed.gt('totalSelectedCount', 0),

  actions: {
    registerToggle: function(toggle) {
      this.get('toggles').addObject(toggle);
    },
    deregisterToggle: function(toggle) {
      this.get('toggles').removeObject(toggle);
    },
    removeSelected: function() { // model obj path {eg: 'model.tasks'}
      // var allSelectedItems = this.get('allSelectedItems').mapBy('content');
      // this.get('model').removeObjects(allSelectedItems);
    }
  }
});
