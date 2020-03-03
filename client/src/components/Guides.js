import React from 'react';

const Guides = ({ allItems, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
      allItems.map((obj) => {
        return (
            <div key={obj.id} className="box">
              <div><b>{obj.name}</b></div>
              <div>{obj.description}</div>
              <div>Created: {obj.created}</div>
              <div><a href={obj.url}>More Information</a></div>
            </div>
        );
      })
    );
};

export default Guides;