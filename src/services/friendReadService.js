const friendRead = async (req, res) => {
  const bestFreindData = await BestFriendsModel.find({});
  res.json(bestFreindData);
};

module.exports = friendRead;