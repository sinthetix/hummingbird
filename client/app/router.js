import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  // https://segment.com/docs/libraries/analytics.js/#page
  _trackPageView: Ember.on('didTransition', function() {
    if (config.environment === 'production') {
      window.analytics.page();
    }
  })
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('dashboard/redirect', { path: '/dashboard' });

  // authentication
  this.route('sign-up');
  this.route('sign-in');
});

export default Router;
