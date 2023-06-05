import clsx from "clsx";
import css from './FriendsLIst.module.css';
import PropTypes from "prop-types";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={css.item}>
            <span className={clsx(css.status, isOnline ? css.isOnline : css.isOfline)}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
    </li >
     );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
