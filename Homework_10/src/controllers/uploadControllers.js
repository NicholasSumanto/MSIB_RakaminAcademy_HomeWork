const fs = require('fs');
const pool = require('../config/dbConfig');
const path = require('path');

const uploadFileToMovie = (req, res) => {
    const movieId = req.params.id;

    if (!req.file) {
        return res.status(400).json({ error: 'Tidak ada file yang diupload!' });
    }

    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedImageTypes.includes(req.file.mimetype)) {
        return res.status(400).json({ error: 'Hanya file dengan format (jpeg, png, dan gif)!' });
    }
    
    const directoryPath = path.join(__dirname, '../images');

    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    const tempPath = req.file.path;
    const targetPath = path.join(directoryPath, req.file.originalname);

    fs.rename(tempPath, targetPath, (err) => {
        if (err) {
            console.error('Gagal memindah file', err);
            return res.status(500).json({ error: 'Server error!' });
        }

        const pathDatabase = `/images/${req.file.originalname}`;
        const query = 'UPDATE movies SET photo = $1 WHERE id = $2';
        const values = [pathDatabase, movieId];

        pool.query(query, values, (err, result) => {
            if (err) {
                console.error('Gagal pada query data', err);
                return res.status(500).json({ error: 'Server error!' });
            } else {
                res.json({ message: 'File berhasil diupload!', filePath: pathDatabase });
            }
        });
    });
};

module.exports = {
    uploadFileToMovie,
};
