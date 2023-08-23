import { Container, Avatar, Info } from "./styles";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://img.olhardigital.com.br/wp-content/uploads/2021/06/shutterstock_1916961890-scaled.jpg" />

      <Info>
        <h1>Dogecoin</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
