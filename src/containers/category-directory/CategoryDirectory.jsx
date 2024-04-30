import DirectoryItem from "../../components/directory-item/DirectoryItem";
import {DirectoryContainer} from "./category-directory.styles";

const CategoryDirectory = ({ products }) => (
  <DirectoryContainer>
    {products.map((product) => {
      return <DirectoryItem product={product} key={product.id} />;
    })}
  </DirectoryContainer>
);

export default CategoryDirectory;
