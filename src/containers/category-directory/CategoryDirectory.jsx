import DirectoryItem from "../../components/directory-item/DirectoryItem";
import { DirectoryContainer } from "./CategoryDirectory.styles";

const CategoryDirectory = ({ products }) => (
  <DirectoryContainer>
    {products.map((product) => {
      return <DirectoryItem product={product} key={product.id} />;
    })}
  </DirectoryContainer>
);

export default CategoryDirectory;
