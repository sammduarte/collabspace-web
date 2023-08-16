import { ThumbsUp, ChatCircleText } from "phosphor-react";

import Avatar from "../Avatar";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../Button";

import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  Interactions,
  InteractionInfo,
  CountReaction,
  CountComment,
  InteracionAction,
  ButtonAction,
  CommentArea,
  CommentForm,
  Comments,
} from "./styles";
import { useState } from "react";

const Post: React.FC = () => {
  const [commentArea, sethCommentArea] = useState(false);

  function toggleCommentArea() {
    sethCommentArea(!commentArea);
  }

  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://i.ytimg.com/vi/KVCiR_hk_34/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBmC8QI6Wy98pg6Lawvy-1_yWOcgA"
            borderEffect
          />

          <AuthorInfo>
            <h1>Irmão do Mateus ASMR</h1>
            <p>@irmaodomateusasmr</p>
          </AuthorInfo>
        </Author>

        <time>Publicado à 1h</time>
      </Header>

      <Content>
        <Description>
          <p>Bom dia galeraaa 👋</p>
          <p>
            Acordei e já fui pra casa do meu irmão levar uma barca de sushi pra
            gente amassar! Não somos muito fãs, mas não perdoamos nem peixe crú!
            🍣
          </p>
        </Description>

        <Hashtags>
          <span>#collabspace</span>
          <span>#AMASSA</span>
        </Hashtags>
      </Content>

      <Interactions>
        <InteractionInfo>
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              32
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>7 comentários</span>
          </CountComment>
        </InteractionInfo>

        <InteracionAction>
          <ButtonAction>
            <ThumbsUp size={22} />
            Reagir
          </ButtonAction>

          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteracionAction>
      </Interactions>

      <CommentArea $commentArea={commentArea}>
        <CommentForm>
          <h1>Deixe seu comentário</h1>

          <InputArea rows={3} placeholder="Escreva seu comentário aqui ..." />

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          <Comment />
        </Comments>
      </CommentArea>
    </Container>
  );
};

export default Post;
