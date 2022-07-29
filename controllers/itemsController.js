const express = require('express')
const router = express.Router();
const Item = require('../models/Item');

// Show all items
router.get('/', async (req, res, next) => {
    try {
	    const items = await Item.find({})
        // const items = await Item.find({}).populate('owner')
        res.json(items)
    } catch (err) {
        next(err)
    }
});

// Get an item by id
router.get('/:id', async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id)
        // const item = await Item.findById(req.params.id).populate('owner')
        res.json(item)
    } catch (err) {
        next(err)
    }
})

// Update an item by id
router.put('/:id', async (req, res, next) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (updatedItem) {
            res.json(updatedItem)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

// Post a new item
router.post('/', async (req, res, next) => {
    try {
        const newItem = await Item.create(req.body)
        res.status(201).json(newItem)
    } catch(err) {
        next(err)
    }
})

// Delete an item by id
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id)
        res.status(204).json(deletedItem)
    } catch (err) {
        next(err)
    }
})
// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;