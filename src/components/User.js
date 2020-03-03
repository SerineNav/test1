import React from "react";

export default function User({ member, deleteMember }) {
  const memberList = member.map(item => {
    return (
      <div key={member.id}>
        <div>Name is: {item.name}</div>
        <div>Age is: {item.age}</div>
        <div>Hobby is: {item.hobby}</div>
        <button
          onClick={() => {
            return deleteMember(member.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{memberList}</div>;
}
