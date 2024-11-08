const multer = require("multer");

const storage = multer.memoryStorage(); // store on memory temp not locally 

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 5MB
    fileFilter: (req, file, cb) => { // Add 'file' as second argument here
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/word'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPEG, PNG, PDF, WORD files are allowed'));
        }
        cb(null, true);
    },
});

module.exports = upload;