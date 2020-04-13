import React from "react";

export default function Pagination(props) {
  const { page, total_pages, paginateBack, paginateNext } = props;

  return (
    <div className="row mb-4 mt-4">
      <div className="col-6 align-self-center">
        <span className="float-right">
          Total pages: {total_pages}, Current page: {page}
        </span>
      </div>
      <div className="col-6">
        <button className="btn btn-primary mr-2" onClick={paginateBack}>
          Back
        </button>
        <button className="btn btn-primary mr-2" onClick={paginateNext}>
          Next
        </button>
      </div>
    </div>
  );
}
