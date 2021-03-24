import * as externalJsFile from '../externalJsFile';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';


@Injectable()
export class FireEventService {
  constructor(private eventEmitter: EventEmitter2) {}
  fireEvent(): void {
    console.log('Passing event emitter...');
    return externalJsFile(this.eventEmitter);
  }
}
