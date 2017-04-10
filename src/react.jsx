import React from 'react';
import { connect } from 'react-redux';

export function contextualize( contextProps, contextMap, ...connectArgs ) {
  return function( Component ) {
    const ConnectedComponent = connect( ...connectArgs )( Component );

    function ContextualizedComponent( props, context ) {
      return (
        <ConnectedComponent { ...props } { ...contextMap( context, props ) } />
      );
    }

    ContextualizedComponent.contextTypes = contextProps;

    return ContextualizedComponent;
  }
}
