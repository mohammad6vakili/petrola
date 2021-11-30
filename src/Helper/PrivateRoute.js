import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const history = useHistory();
  const profile=useSelector(state=>state.Reducer.profile);
  const { component: Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(props) =>
          profile ? (
          <Component {...props} />
        ) : (
          history.replace("/")
        )
      }
    />
  );
};

export default PrivateRoute;