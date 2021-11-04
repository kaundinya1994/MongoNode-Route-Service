const friendDelete = async (req, res) => {
  const bestFriendData = await BestFriendsModel.findOneAndDelete({
    name: req.body.name,
  });
  res.json(bestFriendData);
};

module.exports = friendDelete;
