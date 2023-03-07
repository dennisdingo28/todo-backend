const express = require('express');

const router = express.Router();

const {allTodos,createTodo,updateTodo,deleteTodo,singleTodo} = require('../controllers/todos')

router.route('/').get(allTodos).post(createTodo)
router.route('/:id').get(singleTodo).patch(updateTodo).delete(deleteTodo)


module.exports=router;