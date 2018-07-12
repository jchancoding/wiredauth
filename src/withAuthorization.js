import React from 'react';

export default (isAuthenticated) => (WrappedComponent) => {
  return class WithAuthorization extends React.Component {
    render() {
      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      }
      return (
        <div className="container text-center p-2">
          <h1>You are not authorized to view this page.</h1>
        </div>
      )
    }
  };
};