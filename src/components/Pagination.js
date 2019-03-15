import React from "react";

const Pagination = ({ page, totalPage, onClick }) => {
  console.log(page, totalPage);
  let pages = [];

  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <li onClick={e => onClick(e, i)} className={i === page ? "active" : ""}>
        <a key={i} href="#!">
          {i}
        </a>
      </li>
    );
  }

  pages.unshift(
    <li
      onClick={e => onClick(e, page - 1)}
      className={page === 1 ? "disabled" : ""}
    >
      <a href="">
        <i className="material-icons">chevron_left</i>
      </a>
    </li>
  );

  pages.push(
    <li
      onClick={e => onClick(e, page + 1)}
      className={page === totalPage ? "disabled" : "waves-effect"}
    >
      <a href="#!">
        <i className="material-icons">chevron_right</i>
      </a>
    </li>
  );

  if (totalPage === 0) {
    pages = [];
  }

  return <ul className="pagination center">{pages}</ul>;
};

export default Pagination;
