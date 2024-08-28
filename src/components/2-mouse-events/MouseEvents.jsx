import React from "react";

const MouseEvents = () => {
  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div id="todo-1" className="bg-success text-light w-50 p-4">
        onMouseOver & onMouseLeave
      </div>

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        onDoubleClick
      </div>
      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseMove</span>
      </div>
      <div id="todo-4" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseOver</span>
      </div>
      <div id="todo-5" className="bg-success text-light w-50 p-4 my-4">
        <span>onMouseEnter</span>
      </div>
    </div>
  );
};

export default MouseEvents;
