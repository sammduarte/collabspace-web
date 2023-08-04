import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <CommentBox>
        <AuthorAndTime>
          <h1>Matheus ASMR</h1>
          <time>Cerca de 2h</time>

          <button>
            <Trash size={22} />
          </button>
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
