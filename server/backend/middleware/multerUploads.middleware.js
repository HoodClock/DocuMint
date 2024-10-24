const multer = require("multer");

const storage = multer.memoryStorage(); // store on memory temp not locally 

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // not greater then 5MB 
    fileFilter: (req, res, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/word'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPEG, PNG, PDF, WORD')); // show message when wrong file hit
        }
        cb(null, true);
    },
});

module.exports = upload;