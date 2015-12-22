import Ember from 'ember';

const {
  computed,
  computed: { alias }
} = Ember;

export default Ember.Mixin.create({
  queryParams: [ 'page', 'per_page' ],
  page: 1,
  perPage: 25,
  per_page: alias('perPage'),

  // TODO-EMBER - Hack - move this to route and reevaluate the pagiation plugin
  onPageChange: function () {
    Ember.$('.viewport').scrollTop(0);
  }.observes('page'),

  totalCount: computed('model', {
    get: function() {
      let model = this.get('model');
      let modelName = model.type.modelName;
      let modelMeta = this.store.metadataFor(modelName);
      return modelMeta.total;
    }
  }),

  totalPages: computed('totalCount', 'perPage', {
    get: function() {
      return Math.ceil(this.get('totalCount') / this.get('perPage'));
    }
  })

});
