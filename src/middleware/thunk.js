/**
 * Modification of original thunk middleware (https://github.com/gaearon/redux-thunk),
 * to allow chaining of additional injectors.
 */
export const thunk = store => next => action => {
  if ( typeof action === 'function' ) {
    action = action( store.dispatch, store.getState );

    if ( typeof action !== 'function' ) {
      return action;
    }
  }

  return next( action );
}
