import {Injectable, Optional} from "@angular/core";
import { createEffect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/angular";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import * as fromAuth from "./auth.reducer";
import * as AuthActions from "./auth.actions";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class AuthEffects {
  initToken$ = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.initToken, {
      run: () => {
        return AuthActions.initTokenSuccess({
          token: this.service.token,
          username: this.service.username
        });
      },

      onError: (action: ReturnType<typeof AuthActions.initToken>, error) => {
        console.error("Error", error);
        return AuthActions.initTokenFailure({ error });
      }
    })
  );

  createToken$: Observable<any> = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.createToken, {
      run: (action: ReturnType<typeof AuthActions.createToken>) => {
        return this.service
          .createToken({ username: action.username, password: action.password })
          .pipe(
            map(
              token =>
                AuthActions.createTokenSuccess({
                  token,
                  username: action.username
                }) as any
            )
          );
      },

      onError: (action: ReturnType<typeof AuthActions.createToken>, error) => {
        console.error("Error", error);
        return AuthActions.createTokenFailure({ error });
      }
    })
  );

  createTokenSuccess$: Observable<any> = createEffect(
    () =>
      this.dataPersistence.fetch(AuthActions.createTokenSuccess, {
        run: () => {
          this.router.navigateByUrl("");
        }
      }),
    { dispatch: false }
  );

  removeTokenSuccess$: Observable<any> = createEffect(
    () =>
      this.dataPersistence.fetch(AuthActions.removeTokenSuccess, {
        run: () => {
          document.location.reload();
        }
      }),
    { dispatch: false }
  );

  removeToken$: Observable<any> = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.removeToken, {
      run: () => {
        this.service.removeToken();
        return AuthActions.removeTokenSuccess();
      },

      onError: (action: ReturnType<typeof AuthActions.removeToken>, error) => {
        console.error("Error", error);
        return AuthActions.removeTokenFailure({ error });
      }
    })
  );

  refreshToken$: Observable<any> = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.refreshToken, {
      run: () => {
        return this.service.refreshToken().pipe(
          map(() => {
            return AuthActions.refreshTokenSuccess();
          })
        );
      },

      onError: (action: ReturnType<typeof AuthActions.refreshToken>, error) => {
        console.error("Error", error);
        return AuthActions.refreshTokenFailure({ error });
      }
    })
  );

  // refreshTokenInterval$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.createTokenSuccess),
  //     switchMap(action =>
  //       interval(((action.token.expired_in * 3) / 4) * 1000).pipe(
  //         map(() => {
  //           return AuthActions.refreshToken();
  //         })
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    @Optional() private service: AuthService,
    private dataPersistence: DataPersistence<fromAuth.AuthPartialState>,
    private router: Router
  ) {}
}
