import PropTypes from 'prop-types';

const FriendListItem = ({ userName, isOnline, avatar }) => {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{userName}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
