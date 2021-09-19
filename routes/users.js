const users = require("../@fake-db/users.json");

const express = require("express");
const router = express.Router();

const isFriend = (friend) => {
  return friend.is_friend === true;
};

const isSuggestedFriend = (users) => {
  return users.is_friend === false;
};

router.get("/", (req, res) => {
  if (req.query.is_friend) {
    let friends = users.filter(isFriend);
    res.send(friends);
  } else if (req.query.is_suggested_friend) {
    let suggestedFriends = users.filter(isSuggestedFriend);
    res.send(suggestedFriends);
  } else res.send(users);
});

module.exports = router;
