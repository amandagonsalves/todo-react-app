import React from 'react';

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        console.log(list)
        return list.map(todo => {
            return <tr><td>{todo.description}</td></tr>;
        });
    };

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}