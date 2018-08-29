import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeaderInterceptor} from './HeaderInterceptor';
import {BusyInterceptor} from './BusyInterceptor';
import {LogInterceptor} from './LogInterceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
];