import { PluginListenerHandle, WebPlugin } from '@capacitor/core';
import type { AddAppActionOptions, AppActionsPlugin } from './definitions';
export declare class AppActionsWeb extends WebPlugin implements AppActionsPlugin {
    set(options: AddAppActionOptions): Promise<void>;
    addListener(actionId: string, listener: (info: any) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
}
