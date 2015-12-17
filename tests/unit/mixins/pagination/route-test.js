import Ember from 'ember';
import PaginationRouteMixin from '../../../mixins/pagination/route';
import { module, test } from 'qunit';

module('Unit | Mixin | pagination/route');

// Replace this with your real tests.
test('it works', function(assert) {
  let PaginationRouteObject = Ember.Object.extend(PaginationRouteMixin);
  let subject = PaginationRouteObject.create();
  assert.ok(subject);
});
