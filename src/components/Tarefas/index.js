import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {

    return (
        <div>
            <ul className="tarefas">
                {tarefas.map((tarefas, index) => (
                    <li key={tarefas}>{
                        tarefas}
                        <div>
                            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
};

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}