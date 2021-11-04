
const friendCreate = async (req, res) => {
  const bestFriendsInsertData = await BestFriendsModel.insertMany([req.body]);
  console.log(bestFriendsInsertData);
  res.json(bestFriendsInsertData);
};

module.exports = friendCreate;