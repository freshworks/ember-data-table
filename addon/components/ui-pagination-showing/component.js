import Ember from 'ember';
import layout from './template';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  firstCount: computed('current', 'steps', {
    get () {
      return (this.get('current') - 1) * this.get('steps');
    }
  }),
  begin: computed('firstCount', {
    get () {
      return Math.max((this.get('firstCount') + 1), 1);
    }
  }),
  end: computed('firstCount', 'count', 'steps', {
    get () {
      var pseudoEnd = this.get('firstCount') + this.get('steps');
      return Math.min(pseudoEnd, this.get('count'));
    }
  })
});
