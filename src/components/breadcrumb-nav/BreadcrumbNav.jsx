import { BreadcrumbNavContainer, BreadcrumbLink } from "./BreadcrumbNav.styles";

const BreadcrumbNav = ({
  headerTitle,
  headerLink,
  productTitle,
  productPage,
  productsPage,
  productsPageLink
}) => {
  // const productTitle = "true";
  // const productPage = false;
  // const productsPageLink = catId < 8 ? "/products/7" : "/products/10";
  // const headerTitle = catId < 8 ? "Design Store" : "Design Shop";
  // const headerLink = catId < 8 ? "/store" : "/shop";
  return (
    <>
      <BreadcrumbNavContainer>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
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

        {productsPage ? (
          <>
            <BreadcrumbLink to={headerLink}>{headerTitle}</BreadcrumbLink>
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
            <BreadcrumbLink to={productsPageLink}>Products</BreadcrumbLink>{" "}
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
            {productTitle}
          </>
        ) : productPage ? (
          <>
            <BreadcrumbLink to={headerLink}>{headerTitle}</BreadcrumbLink>
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
            {productTitle}
          </>
        ) : (
          <>{headerTitle}</>
        )}
      </BreadcrumbNavContainer>
    </>
  );
};

export default BreadcrumbNav;
