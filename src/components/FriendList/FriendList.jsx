import { FriendListItem } from './FriendListItem';
import PropTypes from "prop-types";
import css from './FriendsLIst.module.css';

export const FriendList = ({ friends }) => {
 return (
		<div className={css.friendcontainer}>
     <ul className={css.friendlist}>
       {friends.map(({ id, isOnline, avatar, name }) => (
      
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
			</ul>
		</div>
	)
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.number.isRequired,
        }))
}