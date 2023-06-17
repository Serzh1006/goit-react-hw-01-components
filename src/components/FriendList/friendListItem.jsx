import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './friendList.module.css';

const FriendListItem = ({ userName, isOnline, avatar }) => {
  return (
    <li className={css.friendItem}>
      <span
        className={clsx(css.friendStatus, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{userName}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
