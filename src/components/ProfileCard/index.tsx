import { Container, Cover, Divider, ButtonEdit } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://i.ytimg.com/vi/ANGDMXXoaIs/maxresdefault.jpg"></Cover>

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Matheus ASMR</h1>
        <p>@matheus3pontinhos</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
