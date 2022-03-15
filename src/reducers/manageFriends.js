export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      let friendToRemove = state.friends.find(
        (friend) => friend.id === action.id
      );
      return {
        friends: state.friends.filter((friend) => friend !== friendToRemove),
      };
    default:
      return state;
  }
}
//class solution
// let indexFriend = state.friends.map((f) => f.id).indexOf(action.id);
// return {friends:  [
//   ...state.friends.slice(0, indexFriend),
//   ...state.friends.slice(indexFriend + 1, -1),
// ]};

// my solution
// let friendToRemove = state.friends.find(
//     (friend) => friend.id === action.id
//   );
//   return {
//     friends: [
//       ...state.friends.filter((friend) => friend !== friendToRemove),
//     ],
//   };
