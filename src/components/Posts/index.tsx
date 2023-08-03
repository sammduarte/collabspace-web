import Avatar from "../Avatar";

import { Container, Content, Hashtags, Divider } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Matheus ASMR</h1>
            <p>@matheus3pontinhos</p>
          </section>
        </div>

        <p>Publicado à 1h</p>
      </header>

      <main>
        <Content>
          <p>Bom dia Galera!</p>
          <p> Acordei e já tomei logo aquele copão insano de (3 pontinhos)</p>
        </Content>

        <Hashtags>
          <span>#collabspace</span>
          <span>#AMASSA</span>
        </Hashtags>
      </main>

      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>

        <textarea name=""></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
