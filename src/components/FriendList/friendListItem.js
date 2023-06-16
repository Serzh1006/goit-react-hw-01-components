import PropTypes from 'prop-types';

const FriendListItem = ({ userName, isOnline, avatar }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{userName}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
