import { InjectionToken } from '@angular/core';
import { IAppConfig }     from 'app/iapp-config';

// https://github.com/angular/angular-cli/issues/2034
export let APP_CONFIG = new InjectionToken('app.config');

// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
export const AppConfig: IAppConfig = {
  apiEndpoint: ''
};

// export const AppConfig: IAppConfig = {
//    apiEndpoint: 'http://localhost:8080/AlertSubscribeServicesPOC/'
// };
