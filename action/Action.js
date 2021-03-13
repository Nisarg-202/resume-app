const countries = require('../List/CountryList');
const Resume = require('../Schema/resumeSchema');

const getCountry = function (req, res) {
  res.send(countries);
};

const addResume = async function (req, res) {
  try {
    const {name, country, date} = req.body;
    const {data} = req.files.file;

    if (!req.files.file || req.files.file.mimetype !== 'application/pdf') {
      res.send({condition: false});
    } else {
      const resume = new Resume({
        name,
        country,
        date,
        resume: data,
      });

      await resume.save();

      res.send({condition: true});
    }
  } catch (err) {
    res.send({condition: false});
  }
};

const getResume = async function (req, res) {
  const resumes = await Resume.find().select({resume: 0});
  res.send({resumes, condition: true});
};

const getPdf = async function (req, res) {
  const resume = await Resume.findOne({_id: req.params.id});
  res.set('Content-Type', 'application/pdf');
  res.send(resume.resume);
};

exports.getCountry = getCountry;
exports.addResume = addResume;
exports.getResume = getResume;
exports.getPdf = getPdf;
