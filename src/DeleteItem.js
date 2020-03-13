import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = ({onDelete, isButtonDisabled }) => {
  const handleDelete = event => onDelete();
  
  return (
    <button onClick={handleDelete} disabled={isButtonDisabled}>Delete last Item</button>
  );
};

DeleteItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.func.isRequired
};

export default DeleteItem;