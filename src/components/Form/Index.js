import React from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
    return (<form onSubmit={handleSubmit} action="#">
        <input
            type="text"
            id="add"
            name="addTask"
            value={novaTarefa}
            onChange={handleChange}>
        </input>
        <button type="submit"><FaPlus /></button>
    </form>)
}

//Caso queira informações default
Form.defaultProps = {
    novaTarefa: "",
}

Form.prototypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string
}