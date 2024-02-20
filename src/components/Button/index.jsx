import { ContainerButton } from "./styles";

export default function Button({ title, loading = false, children, ...rest }) {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </ContainerButton>
  );
}
