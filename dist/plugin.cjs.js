'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppActions = core.registerPlugin('AppActions', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppActionsWeb()),
});

class AppActionsWeb extends core.WebPlugin {
    set(options) {
        throw new Error('Method not implemented.');
    }
    addListener(actionId, listener) {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppActionsWeb: AppActionsWeb
});

exports.AppActions = AppActions;
//# sourceMappingURL=plugin.cjs.js.map
