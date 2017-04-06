export const injector = payload => () => next => action => {
  if ( typeof action === 'function' ) {
    action = action( payload );

    if ( typeof action !== 'function' ) {
      return action;
    }
  }

  return next( action );
}
