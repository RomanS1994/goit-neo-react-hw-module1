import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
