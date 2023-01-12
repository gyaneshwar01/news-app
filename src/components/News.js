import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import Spinner from "./Spinner";

const News = ({ API_KEY }) => {
  const [newsList, setNewsList] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pagesize=12&page=${page}`
      )
      .then((res) => {
        setNewsList(res.data.articles);
        const noOfPages = Math.ceil(res.data.totalResults / 12);
        setTotalPage(noOfPages);
        setIsLoading(false);
      });
  }, [page, API_KEY]);

  const prevPage = () => {
    page > 1 && setPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    page < totalPage && setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">NewsMonkey - Top Headlines</h1>
      {isLoading && <Spinner />}
      <div className="row">
        {newsList.map(
          (news, index) =>
            news.urlToImage && (
              <div key={index} className="col-md-4">
                <NewsItem
                  title={news.title}
                  desc={news.description}
                  url={news.url}
                  urlToImage={news.urlToImage}
                />
              </div>
            )
        )}
      </div>
      {!isLoading && (
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={prevPage}
            disabled={page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={nextPage}
            disabled={page === totalPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
