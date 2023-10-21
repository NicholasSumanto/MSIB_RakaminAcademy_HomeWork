const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');


router.get('/', async (req, res) => {
  try {
    const users = await userController.getUsers();
    res.render('users/user', { users: users });
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});


router.post('/create', async (req, res) => {
  try {
    const result = await userController.createUser(req, res);
    res.json(result);
  } catch (error) {
    console.error('Gagal pada penambahan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});


router.put('/update/:id', async (req, res) => {
  try {
    const result = await userController.updateUser(req, res);
    res.json(result);
  } catch (error) {
    console.error('Gagal pada pembaruan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await userController.deleteUser(req, res);
    res.json(result);
  } catch (error) {
    console.error('Gagal pada penghapusan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});

module.exports = router;
