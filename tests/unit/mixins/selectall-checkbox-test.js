import Ember from 'ember';
import SelectallCheckboxMixin from '../../../mixins/selectall-checkbox';
import { module, test } from 'qunit';

module('Unit | Mixin | selectall checkbox');

// Replace this with your real tests.
test('it works', function(assert) {
  let SelectallCheckboxObject = Ember.Object.extend(SelectallCheckboxMixin);
  let subject = SelectallCheckboxObject.create();
  assert.ok(subject);
});
