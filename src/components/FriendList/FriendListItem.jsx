import { Container, Status } from 'components/FriendList/FriendLiast.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <Container key={id}>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Container>
  ));
};
