import { combineReducers as combinePlainReducers } from 'redux';
import { Map } from 'immutable';

export function combineReducers( map ) {
  const reducer = combinePlainReducers( map );

  return ( state = Map(), action ) => Map( reducer( state.toObject(), action ) );
}
