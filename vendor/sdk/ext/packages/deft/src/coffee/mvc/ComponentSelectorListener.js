// Generated by CoffeeScript 1.6.3
/*
Copyright (c) 2012-2013 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
*/


/**
* Manages live events attached to component selectors. Used by Deft.mvc.ComponentSelector.
* @private
*/


(function() {
  Ext.define('Deft.mvc.ComponentSelectorListener', {
    requires: ['Deft.event.LiveEventBus'],
    constructor: function(config) {
      var component, _i, _len, _ref;
      Ext.apply(this, config);
      if (this.componentSelector.live) {
        Deft.LiveEventBus.addListener(this.componentSelector.view, this.componentSelector.selector, this.eventName, this.fn, this.scope, this.options);
      } else {
        _ref = this.componentSelector.components;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          component = _ref[_i];
          component.on(this.eventName, this.fn, this.scope, this.options);
        }
      }
      return this;
    },
    destroy: function() {
      var component, _i, _len, _ref;
      if (this.componentSelector.live) {
        Deft.LiveEventBus.removeListener(this.componentSelector.view, this.componentSelector.selector, this.eventName, this.fn, this.scope);
      } else {
        _ref = this.componentSelector.components;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          component = _ref[_i];
          component.un(this.eventName, this.fn, this.scope);
        }
      }
    }
  });

}).call(this);
