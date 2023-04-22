import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date } = this.props;
    return (
      <>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author == null ? "Unknown" : author} on {date}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
