var capacitorAppActions = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
