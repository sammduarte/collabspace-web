import Avatar from "../Avatar";
import Comment from "../Comment";

import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  CommentForm,
  InputArea,
  ButtonComment,
  Comments,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://yt3.googleusercontent.com/YLs7Lr-nZ4a5dFVlc2I0Ehm_TdbzbTzzutJCh2RKpobdxvGO41qZMs6CbKdiQf5KaE4IZkwt2Q=s900-c-k-c0x00ffffff-no-rj"
            borderEffect
          />

          <AuthorInfo>
            <h1>Matheus ASMR</h1>
            <p>@matheus3pontinhos</p>
          </AuthorInfo>
        </Author>

        <time>Publicado à 1h</time>
      </Header>

      <Content>
        <Description>
          <p>Bom dia Galera 👋</p>
          <p>
            Acordei, vesti meu oclinho, vesti meu bonezinho e fui logo tomando
            aquele copão insano de (3 pontinhos). Hoje eu acordei com muita fome
            galera, então vou aproveitar o resto de lasanha de ontem e já vou
            AMASSAR! 🍗
          </p>
        </Description>

        <Hashtags>
          <span>#collabspace</span>
          <span>#AMASSA</span>
        </Hashtags>
      </Content>

      <Divider />

      <CommentForm>
        <h1>Deixe seu comentário</h1>

        <InputArea name=""></InputArea>

        <ButtonComment>Comentar</ButtonComment>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;
