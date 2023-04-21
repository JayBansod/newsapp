import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    //run after the render methode is done
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1fcbedc42470420095553f4ec41976d9&page=1&pageSize=${this.props.pageSixe}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handelNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSixe)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1fcbedc42470420095553f4ec41976d9&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSixe}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      this.setState({ loading: true });
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1fcbedc42470420095553f4ec41976d9&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSixe}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center bg-primary"> Top HeadLines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    urlToImage={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://sportshub.cbsistatic.com/i/r/2023/04/18/5d5251be-8322-4bcb-b7ec-3556386924e8/thumbnail/1200x675/114cc62de16a9f98b4977705357b0039/levis.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary"
              onClick={this.handelPreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSixe)
              }
              type="button"
              className="btn btn-primary"
              onClick={this.handelNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
