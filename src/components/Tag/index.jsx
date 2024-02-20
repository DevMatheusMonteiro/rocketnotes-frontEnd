import { ContainerTag } from "./styles";

export default function Tag({ title, ...rest }) {
  return <ContainerTag {...rest}>{title}</ContainerTag>;
}
