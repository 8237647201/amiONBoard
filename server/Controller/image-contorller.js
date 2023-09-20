import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:4000';

const con = mongoose.connection;

let gfs, gridfsBucket;

con.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(con.db, {
    bucketName: 'fs',
  });
  gfs = grid(con.db, mongoose.mongo);
  gfs.collection('fs');
});

export const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({ msg: 'File Not Found!' });
    }

    const imageUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    if (!file) {
      return res.status(404).json({ msg: 'File Not Found!' });
    }

    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
  