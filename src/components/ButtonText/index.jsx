import { ContainerButtonText } from "./styles";

export default function ButtonText({ title, isactive = false, ...rest }) {
  return (
    <ContainerButtonText
      type="button"
      {...rest}
      $isactive={isactive.toString()}
    >
      {title}
    </ContainerButtonText>
  );
}
