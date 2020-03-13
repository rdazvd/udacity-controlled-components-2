import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items }) => (
  <div>
    <p>Items</p>
    <ol>
      { items.map((item, index) => <Item key={index} item={item} />) }
    </ol>
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;