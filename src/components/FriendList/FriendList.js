import styles from './FriendList.module.css'
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (<li className={styles.item} key={id}>
          <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
          <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
        </li>);
      }

      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })),
};
