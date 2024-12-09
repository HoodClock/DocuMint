const txModel = require('../models/TransactionHistory.model');

exports.getAllTransaction = async (req, res) => {
    try {

        const transactions = await txModel.find({ user: req.user._id });

        res.status(200).json({ success: true, tx: transactions });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}