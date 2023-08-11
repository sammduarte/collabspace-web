import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://i.ytimg.com/vi/ANGDMXXoaIs/maxresdefault.jpg"></Cover>

        <div>
          <Avatar
            src="https://yt3.googleusercontent.com/YLs7Lr-nZ4a5dFVlc2I0Ehm_TdbzbTzzutJCh2RKpobdxvGO41qZMs6CbKdiQf5KaE4IZkwt2Q=s900-c-k-c0x00ffffff-no-rj"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Mateus ASMR</h1>
        <p>@mateusasmr</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
