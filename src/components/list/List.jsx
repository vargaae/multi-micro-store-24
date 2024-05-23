import useFetch from "../../hooks/useFetch";

import { Card } from "../";

import "./List.styles.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error, errorMessage } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq=${item}]`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {error
        ? `Something went wrong! Errormessage: "${errorMessage}"`
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
