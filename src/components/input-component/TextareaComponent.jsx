import { Group, Input, FormInputLabel } from "./TextareaComponent.styles";

const TextareaComponent = ({ label, ...otherProps }) => {
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

export default TextareaComponent;
