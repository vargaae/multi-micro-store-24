import { useRouteError } from "react-router-dom";

import {
  ErrorPageContainer,
  ErrorContainer,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
} from "./ErrorPage.styles";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageContainer id="error-page">
      <ShopBreadcrumbNavContainer>
        <ShopBreadcrumbLink onClick={() => navigate(-1)}>
          Go back to MULTI-MICRO-STORE-24
        </ShopBreadcrumbLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          color="rgb(0, 0, 0)"
        >
          <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
        </svg>
        Sorry, an unexpected error has occurred:
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ShopBreadcrumbNavContainer>
      <ErrorContainer className="gradient__bg">
        <div title="404">
          {error.statusText || error.message == "Not Found" ? "404" : "Error"}
        </div>
      </ErrorContainer>
    </ErrorPageContainer>
  );
}
