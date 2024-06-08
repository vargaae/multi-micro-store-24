import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.styles.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
    <h2 className="breadcrumb-nav">
        <Link className="link" to="/">
          Go back Home
        </Link>{" "}
      </h2>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="error-container gradient__bg">
        <div title="404">404</div>
      </div>
    </div>
  );
}
