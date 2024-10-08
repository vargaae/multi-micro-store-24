import { Group, Input, FormInputLabel } from "./InputComponent.styles";

const InputComponent = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={label} $shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default InputComponent;
