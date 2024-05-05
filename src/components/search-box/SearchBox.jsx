import { Input } from "../input-component/InputComponent.styles";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <Input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
