import parser from 'xml2js';

const xml2json = (xml) => {
  return new Promise((resolve, reject) => {
    parser.parseString(xml, { trim: true }, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

export default {
  xml2json,
};
