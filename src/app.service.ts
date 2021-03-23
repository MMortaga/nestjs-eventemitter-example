import { Injectable } from '@nestjs/common';
import * as externalJsFile from '../externalJsFile';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor(private eventEmitter: EventEmitter2) {}

  getHello(): string {
    console.log('Passing event emitter...');
    externalJsFile(this.eventEmitter);
    return 'Hello World!';
  }
}
