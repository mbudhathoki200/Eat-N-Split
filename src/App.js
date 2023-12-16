const initialFriends = [
  {
    id: 118836,
    name: "Manish",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Kapil",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Adwait",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={initialFriends} />
      </div>
    </div>
  );
}

function FriendsList({ data }) {
  // const friends = initialFriends;
  return (
    <ul>
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="red">
          {friend.name} ows you {Math.abs(friend.balance)}💰
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}💰
        </p>
      )}
      {friend.balance === 0 && (
        <p className="red">You and {friend.name} are even💰</p>
      )}
      <button className="button">Select</button>
    </li>
  );
}
