define("collections/Orders",[],function(){var e={Models:{},Views:{},Collections:{},CustomFunctions:{}};return e.Views.Wrapper=Marionette.ItemView.extend({template:"#"}),e.CustomFunctions.clearAll=function(){return[]},e}),define("views/AppView",["collections/Orders"],function(e){return e.CustomFunctions.clearAll(2)}),require(["views/AppView"],function(e){}),define("main",function(){});