import { Link } from "react-router-dom";

// https://reacttraining.com/react-router/web/example/auth-workflow
export const AuthorizedLink = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // TODO: finish
        <Link to="/connect">Connect</Link>
    )} />
)