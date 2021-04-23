import React, {useState} from 'react';

import { data } from '../utils';
const DetailPage = ({ match }) => {
    const id = match.params.id;
    // const [item, setNewItem] = useState(data);
    // const newData = setNewItem(item.filter((recipe) => recipe.id !== id));

    console.log(data); // [{},{}]
    console.log(id, 'params');
    // console.log(newData);


  return <p></p>;
};

export default DetailPage;







