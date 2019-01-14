// https://reacttraining.com/react-router/web/example/auth-workflow
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // TODO: how to determine if authenticated? How to pass in necessary service/object?
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/connect' />
    )} />
)