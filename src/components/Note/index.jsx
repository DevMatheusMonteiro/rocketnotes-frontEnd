import { ContainerNote } from "./style";

import Tag from "../Tag";

export default function Note({ data, ...rest }) {
  return (
    <ContainerNote type="button" {...rest}>
      <span>{data.title}</span>
      {data.tags && (
        <div>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </div>
      )}
    </ContainerNote>
  );
}
