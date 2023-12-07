import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tabl-c-hast-4-дом-l');
  this.route('i-i-s-tabl-c-hast-4-дом-e',
  { path: 'i-i-s-tabl-c-hast-4-дом-e/:id' });
  this.route('i-i-s-tabl-c-hast-4-дом-e.new',
  { path: 'i-i-s-tabl-c-hast-4-дом-e/new' });
  this.route('i-i-s-tabl-c-hast-4-ученик-l');
  this.route('i-i-s-tabl-c-hast-4-ученик-e',
  { path: 'i-i-s-tabl-c-hast-4-ученик-e/:id' });
  this.route('i-i-s-tabl-c-hast-4-ученик-e.new',
  { path: 'i-i-s-tabl-c-hast-4-ученик-e/new' });
  this.route('i-i-s-tabl-c-hast-4-школа-l');
  this.route('i-i-s-tabl-c-hast-4-школа-e',
  { path: 'i-i-s-tabl-c-hast-4-школа-e/:id' });
  this.route('i-i-s-tabl-c-hast-4-школа-e.new',
  { path: 'i-i-s-tabl-c-hast-4-школа-e/new' });
});

export default Router;
