const todoSchema = require('../models/todo');
const asyncWrapper = require('../asyncWrapper/asyncWrapper') 

const allTodos = asyncWrapper( async (req,res)=>{
    const todo = await todoSchema.find({});
    if(!todo)
        return res.status(404).json({msg:'No todo'})
    res.status(200).json({todo}); 
})
const singleTodo = asyncWrapper( async (req,res)=>{
    const {id:taskId}=req.params;
    const todo = await todoSchema.findOne({_id:taskId})
    if(!todo)
        return res.status(404).json({msg:'No todo'})
    res.status(200).json({todo});
})
const createTodo = asyncWrapper( async (req,res)=>{
    
    const todo = await todoSchema.create(req.body);
    res.status(201).json({todo})
})
const updateTodo = asyncWrapper( async (req,res)=>{
    const {id:taskId}=req.params;
    const todo = await todoSchema.findOneAndUpdate({_id:taskId},req.body,{
        new:true,
        overwrite:true
    })
    if(!todo)
        return res.status(404).json({msg:'No todo'})
    res.status(200).json({todo});
})
const deleteTodo = asyncWrapper( async (req,res)=>{
    const {id} = req.params;
    const todo = await todoSchema.findOneAndDelete({_id:id});
    if(!todo)
        return res.status(404).json({msg:'No todo'})
    res.status(200).json({todo})
})

module.exports = {allTodos,createTodo,updateTodo,deleteTodo,singleTodo};