import Avatar from "../Avatar";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://yt3.googleusercontent.com/YLs7Lr-nZ4a5dFVlc2I0Ehm_TdbzbTzzutJCh2RKpobdxvGO41qZMs6CbKdiQf5KaE4IZkwt2Q=s900-c-k-c0x00ffffff-no-rj"
          borderEffect
        />

        <InputArea placeholder="O que temos para hoje? ..." rows={1} />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
