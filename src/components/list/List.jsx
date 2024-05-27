/* eslint-disable react/prop-types */
import useFetch from "../../hooks/useFetch";

import { Card } from "../";

import "./List.styles.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error, errorMessage } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
      (item) => `&filters[sub_category][id][$eq]=${item}&`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    // &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    // `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
    //   (item) => `&[filters][sub_category][id][$eq=${item}]`
    // )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  // TODO: no product notice: - >Check in ConfySloth
  // {data.length !== 0 ? data?.map((item) => <Card item={item} key={item.id} />) : <div>no product in this sub_category</div>}

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
