import { HomeContainer, Blur, HomeTitle, HomeText } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Blur>
        <HomeTitle>Welcome to your personal phone book!</HomeTitle>
        <HomeText>
          To use the contact book, please register or log in to your account
        </HomeText>
      </Blur>
    </HomeContainer>
  );
};

export default Home;
