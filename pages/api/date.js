export default (req, res) => {
  //console.log(req.headers);
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};
