import React from "react"
import cn from 'classnames'

class MovieTabs extends React.Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log("willReceiveProps");
    console.log("nextProps sort_by", nextProps.sort_by);
    console.log("prevProps sort_by", this.props.sort_by);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => {
      return () => {
        updateSortBy(value);
      };
    };

    const getClassLink = value => {
      //return `nav-link ${sort_by === value ? "active" : ""}`;

      // или используем бииблиотеку classnames
      return cn("nav-link", {"active": sort_by === value});
    }

    console.log("MovieTabs render")

    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className={getClassLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}
            href="#stub"
          >
            Popularity desc
        </a>
        </li>
        <li className="nav-item">
          <a
            className={getClassLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}
            href="#stub"
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
            href="#stub"
          >
            Vote average desc
        </a>
        </li>
      </ul>
    )
  }
}

export default MovieTabs;
