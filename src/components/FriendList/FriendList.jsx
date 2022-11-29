import PropTypes from 'prop-types';
import {
  ListFriends,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendStatus isOnline={friend.isOnline}>
            {friend.isOnline}
          </FriendStatus>
          <FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
