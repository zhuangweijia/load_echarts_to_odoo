odoo.define('load_echarts', function (require) {
    "use strict";
    var core = require('web.core');
    var Widget = require('web.Widget');
    var AbstractAction = require('web.AbstractAction');


    var Echarts = AbstractAction.extend({
        // 对应xml中t-name
        template: 'echarts_china_template',

        init: function(parent, data){
            return this._super.apply(this, arguments);
        },

        start: function(){
            this._setTitle('odoo&echarts');
            return true;
        },


    });
    // 对应client_action中的tag
    core.action_registry.add('load_echarts.load_echarts_china', Echarts);
})


odoo.define('load_echarts2', function (require) {
    "use strict";
    var core = require('web.core');
    var Widget = require('web.Widget');
    var AbstractAction = require('web.AbstractAction');


    var bargraph = AbstractAction.extend({
        // 对应xml中t-name
        template: 'echarts_bargraph_template',

        init: function(parent, data){
            return this._super.apply(this, arguments);
        },

        start: function(){
            this._setTitle('my bargraph');
            return true;
        },


    });
    // 对应client_action中的tag
    core.action_registry.add('load_echarts2.load_echarts_bargraph', bargraph);
})
