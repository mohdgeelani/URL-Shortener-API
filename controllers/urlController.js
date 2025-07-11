const validUrl = require('valid-url');
const {nanoid} = require('nanoid');

const URL = require('../models/url');

const BASE_URL = process.env.BASE_URL;
// console.log(req.body);
const shortenUrl = async (req, res) => {
       const {url} = req.body;
console.log(req.body);
       if(!validUrl.isUri(BASE_URL)){
         return res.status(500).json({error: "Invalid Url"});
       }
       if(!validUrl.isUri(url)){
         return res.status(400).json({error: "Invalid Url format"});
       }
       try {
       const existingurl = await URL.findOne({where : {originalurl : url}});
       if(existingurl)
       {
        return res.json({shortUrl:`${BASE_URL}/${existingurl.shortCode}`});
       }

       const shortCode = nanoid(6);

       const newrecord = await URL.create({
        originalurl : url,
        shortCode: shortCode
  });
  return res.status(201).json({
    shortUrl : `${BASE_URL}/${newrecord.shortCode}`,
  });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
};


const redirectUrl = async (req, res) => {
  const { shortCode } = req.params;

  try {
    const record = await URL.findOne({ where: { shortCode } });

    if (record) {
      return res.redirect(record.originalurl);
    } else {
      return res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
module.exports = {
  shortenUrl,
  redirectUrl
};
