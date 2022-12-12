import { registerPlugin } from '@capacitor/core';
const AppActions = registerPlugin('AppActions', {
    web: () => import('./web').then(m => new m.AppActionsWeb()),
});
export * from './definitions';
export { AppActions };
//# sourceMappingURL=index.js.map