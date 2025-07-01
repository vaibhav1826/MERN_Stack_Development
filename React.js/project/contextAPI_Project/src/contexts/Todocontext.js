import {createContext , useContext } from 'react'

export const Todocontext= createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false,
    }],
    
    addTodo:(todo) =>{},
    deleteTodo:(id) =>{},
    updateTodo:(id,todo) =>{},
    togglecomplete:(id) =>{}

})

export const useTodo=() =>{ 
    return useContext(Todocontext)}

const TodoProvider = Todocontext.Provider