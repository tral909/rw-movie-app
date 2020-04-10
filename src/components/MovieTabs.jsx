import React from "react"

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;

  const handleClick = value => {
    return () => {
      updateSortBy(value);
    };
  };

  const getClassLink = value => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  }

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          className={getClassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
          href="#"
        >
          Popularity desc
        </a>
      </li>
      <li className="nav-item">
        <a
          className={getClassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
          href="#"
        >
          Revenue desc
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            sort_by === "vote_average.desc" ? "active" : ""}`}
          onClick={() => {
            updateSortBy("vote_average.desc");
          }}
          href="#"
        >
          Vote average desc
        </a>
      </li>
    </ul>
  )
}

export default MovieTabs;
