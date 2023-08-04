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
  Comments,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar />

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
            Acordei, vesti meu aclinho, vesti meu bonezinho e fui logo tomando
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

        <textarea name=""></textarea>

        <button>Comentar</button>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;
