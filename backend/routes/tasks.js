const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');

// GET all tasks for logged-in user (owned or shared)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({
      $or: [
        { owner: req.user.id },
        { sharedWith: req.user.id },
      ],
    }).populate('owner sharedWith', 'name email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new task (assign owner)
router.post('/', async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const newTask = new Task({
    title,
    description,
    dueDate,
    priority,
    status: 'pending',
    owner: req.user.id,
  });

  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update existing task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, status } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, priority, status },
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE remove task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST share task with another user by email
router.post('/:id/share', async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    const userToShare = await User.findOne({ email });
    if (!userToShare) return res.status(404).json({ error: 'User to share with not found' });

    if (!task.sharedWith.includes(userToShare._id)) {
      task.sharedWith.push(userToShare._id);
      await task.save();
    }

    res.json({ message: `Task shared with ${userToShare.email}`, task });
  } catch (err) {
    console.error('Error sharing task:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
