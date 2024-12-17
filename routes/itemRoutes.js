const express = require('express');
const router = express.Router();

// Sample data
const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

// Get all items
router.get('/items', (req, res) => {
    res.json(items);
});

module.exports = router;
