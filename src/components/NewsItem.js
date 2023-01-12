import React from "react";

const NewsItem = ({ title, desc, url, urlToImage }) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img src={urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc.slice(0, 85)}...</p>
        <a
          href={url}
          className="btn btn-dark btn-sm"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
