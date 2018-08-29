/**
 * 目前使用终端控制台打印出请求所花费的时间
 */
import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { Injectable } from '@angular/core';
import {
     HttpInterceptor, HttpHandler, HttpRequest,HttpResponse  } from '@angular/common/http';
 
@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
 
    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
            
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
            
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
            console.log(msg);
            this.messenger.add(msg);
        })
      );
  }
}