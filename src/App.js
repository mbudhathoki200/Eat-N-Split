import { useState } from "react";

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
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={initialFriends} />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? `Close` : `Add friend`}
        </Button>
      </div>
      <FormSplitBill />
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
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🙆Friend name</label>
      <input type="text"></input>
      <label>🖼️Image Url</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text"></input>
      <label>🤵Your Expenses</label>
      <input type="text"></input>
      <label>💰X's Expense</label>
      <input type="text" disabled></input>
      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
