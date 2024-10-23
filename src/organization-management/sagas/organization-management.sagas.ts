import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { UserRegisteredEvent } from '../events/impl/user-registered.event';

const itemId = '0';

@Injectable()
export class OrganizationManagementSagas {
  @Saga()
  userRegistered = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(ofType(UserRegisteredEvent), delay(1000));
  };
}
