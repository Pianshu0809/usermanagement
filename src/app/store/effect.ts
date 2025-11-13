import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Userinfo } from '../service/userinfo';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './action';
import { User } from './model';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userinfoService = inject(Userinfo);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        const localRawData = JSON.parse(localStorage.getItem('Dummy Users Data') || '[]');

        return this.userinfoService.getUser().pipe(
          map((response: any) => {
            const apiUsers: User[] =
              response.users?.map((u: any) => ({
                ...u,
                source: 'api',
              })) || [];

            // ✅ Get the last API user’s ID to continue numbering
            const lastApiId = apiUsers.length > 0 ? Math.max(...apiUsers.map(u => u.id)) : 0;

            // ✅ Convert local data and give new sequential IDs
            const localData: User[] = localRawData.map((user: any, index: number) => ({
              id: lastApiId + index + 1, // starts after last API ID
              firstName: user.fn || '',
              lastName: user.ln || '',
              maidenName: user.mn || '',
              birthDate: user.birthdate || '',
              age: user.age || '',
              gender: user.gender || '',
              email: user.email || '',
              phone: user.phone || '',
              username: user.username || '',
              password: user.password || '',
              image: user.userimage || '',
              bloodGroup: user.bloodgroup || '',
              height: user.height || '',
              weight: user.weight || '',
              eyeColor: user.eyecolor || '',
              hair: {
                color: user.hair?.color || '',
                type: user.hair?.type || '',
              },
              ip:user.ipaddress,
              address: {
                address: user.address?.address || '',
                city: user.address?.city || '',
                state: user.address?.state || '',
                 stateCode: user.address?.statecode  || '',
                postalCode: user.address?.postalcode || '',
                coordinates: {
                  lat: user.address?.coordinates?.lat || '',
                  lng: user.address?.coordinates?.lng || '',
                },
                country: user.address?.country || '',
              },
              source: 'local',
            }));

            // ✅ Merge API and Local data
            const mergedUsers: User[] = [...apiUsers, ...localData];

            return loadUsersSuccess({ users: mergedUsers });
          }),
          catchError((error) =>
            of(
              loadUsersFailure({
                error: error?.message || 'Failed to load users from API',
              })
            )
          )
        );
      })
    )
  );
}
