import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
    handleAdd() {
        console.log('add')
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastrar" />

                <TodoForm handleAdd={this.handleAdd} />

                <TodoList />
            </div>
        )
    }
}