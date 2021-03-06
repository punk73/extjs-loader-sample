// Generated by CoffeeScript 1.6.3
/**
* Utility class to support Deft JS mixins.
*/


(function() {
  Ext.define("Deft.util.DeftMixinUtils", {
    statics: {
      /**
      		* Uses the passed mergeFn to recursively merge the specified propertyName up the class hierarchy of the target.
      */

      mergeSuperclassProperty: function(target, propertyName, mergeFn, currentResult) {
        var isRecursionStart, wasMerged;
        if (mergeFn == null) {
          mergeFn = Ext.merge;
        }
        if (currentResult == null) {
          currentResult = null;
        }
        wasMerged = false;
        isRecursionStart = false;
        if (currentResult == null) {
          currentResult = {};
          isRecursionStart = true;
        }
        if (((target != null ? target.superclass : void 0) != null)) {
          currentResult = this.mergeSuperclassProperty(target.superclass, propertyName, mergeFn, currentResult);
        }
        if (((target != null ? target[propertyName] : void 0) != null)) {
          currentResult = mergeFn(currentResult, target[propertyName], Ext.getClassName(target));
          wasMerged = true;
        }
        if (wasMerged && isRecursionStart) {
          target[propertyName] = Ext.clone(currentResult);
        }
        return currentResult;
      },
      /**
      		* Returns the proper method name to call the superclass constructor, based on platform and version.
      */

      parentConstructorForVersion: function() {
        return "callParent";
      }
    }
  });

}).call(this);
