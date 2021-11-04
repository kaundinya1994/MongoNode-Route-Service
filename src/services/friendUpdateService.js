const friendUpdate = async (req, res) => {
  const bestFriendData = await BestFriendsModel.findOneAndUpdate(
    { name: req.body.name },
    { $set: { ph: req.body.ph } },
    { new: true }
  );

  res.json(bestFriendData);
};

module.exports = friendUpdate;
