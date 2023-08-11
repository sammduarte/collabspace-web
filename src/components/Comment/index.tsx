import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://yt3.googleusercontent.com/YLs7Lr-nZ4a5dFVlc2I0Ehm_TdbzbTzzutJCh2RKpobdxvGO41qZMs6CbKdiQf5KaE4IZkwt2Q=s900-c-k-c0x00ffffff-no-rj" />

      <CommentBox>
        <AuthorAndTime>
          <h1>Mateus ASMR</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>
          Meu irmão é insano galera, o moleque trouxe uma barca de sushi pra
          gente amassar!! Mais tarde sai vídeo novo no canal, não percam!! 🍣
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
