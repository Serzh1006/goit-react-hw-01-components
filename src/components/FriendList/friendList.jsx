import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import css from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendLists}>
      {friends.map(obj => {
        return (
          <FriendListItem
            key={obj.id}
            userName={obj.name}
            isOnline={obj.isOnline}
            avatar={obj.avatar}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
