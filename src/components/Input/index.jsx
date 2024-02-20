import { ContainerInput } from "./styles";

export default function Input({ icon: Icon, ...rest }) {
  return (
    <ContainerInput className="ContainerInput">
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </ContainerInput>
  );
}
