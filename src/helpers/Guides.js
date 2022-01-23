import React from "react";

const Guides = ({ allItems }) => {
  return allItems.map((obj) => {
    return (
      <div key={obj.id} className="box">
        {obj.name !== "" && (
          <div className="title">
            <h5>
              <b>{obj.name}</b>
            </h5>
          </div>
        )}
        {obj.description !== "" && (
          <div>
            <p className="label">Description</p>
          </div>
        )}
        <div>{obj.description}</div>
        {obj.type_label !== "" && (
          <div>
            <p className="label">Type</p>
          </div>
        )}
        <div>{obj.type_label}</div>
        {obj.created !== "" && (
          <div>
            <p className="label">Created</p>
          </div>
        )}
        <div>{obj.created}</div>
        {obj.status_label !== "" && (
          <div>
            <p className="label">Status</p>
          </div>
        )}
        <div>{obj.status_label}</div>
        <div>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">
            More Information
          </a>
        </div>
      </div>
    );
  });
};

export default Guides;
