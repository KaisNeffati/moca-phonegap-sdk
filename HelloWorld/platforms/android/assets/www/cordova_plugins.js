cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.innoquant.moca.phonegap/www/MOCA.js",
        "id": "com.innoquant.moca.phonegap.MOCA",
        "pluginId": "com.innoquant.moca.phonegap",
        "clobbers": [
            "MOCA"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.innoquant.moca.phonegap": "2.0.0"
}
// BOTTOM OF METADATA
});