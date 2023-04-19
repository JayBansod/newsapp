import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Asian stocks fall as upbeat Chinese data fails to impress - Reuters",
      description:
        "Asian stocks weakened on Tuesday, brushing off an initial lift from better-than-expected Chinese economic data as signs of patchiness in the country's recovery weighed on investor sentiment.",
      url: "https://www.reuters.com/markets/global-markets-wrapup-1-2023-04-18/",
      urlToImage:
        "https://www.reuters.com/resizer/d0z7YbkYiZudCEmNc8jKz4br8co=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RQLQKRDFA5PLZNDAY4DAN6BYIA.jpg",
      publishedAt: "2023-04-18T06:13:00Z",
      content:
        "SYDNEY, April 18 (Reuters) - Asian stocks weakened on Tuesday, brushing off an initial lift from better-than-expected Chinese economic data as signs of patchiness in the country's recovery weighed on… [+3667 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Putin visits Russian-controlled Ukraine to discuss war with senior general - Reuters",
      description:
        "President Vladimir Putin has visited military headquarters in Russian-controlled Ukraine, the Kremlin said, where he discussed the war with a general from Russia's airborne troops who has reportedly taken up a powerful new role in the invasion.",
      url: "https://www.reuters.com/world/europe/putin-visits-military-headquarters-ukraines-kherson-region-2023-04-18/",
      urlToImage:
        "https://www.reuters.com/resizer/aGQdPLumvn3FzW7iM07vE65Qc88=/940x492/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R4STLRSYEZLBFGMZGDOILPOMAY.jpg",
      publishedAt: "2023-04-18T04:57:00Z",
      content:
        "April 18 (Reuters) - President Vladimir Putin has visited military headquarters in Russian-controlled Ukraine, the Kremlin said, where he discussed the war with a general from Russia's airborne troop… [+2374 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Draymond Green ejected for stomping on Domantas Sabonis | NBA on ESPN - ESPN",
      description:
        "Draymond Green was assessed a Flagrant 2 foul for stepping on Domantas Sabonis as he was on the ground.✔️ Subscribe to ESPN+ http://espnplus.com/youtube✔️ Ge...",
      url: "https://www.youtube.com/watch?v=F9TxfMx_OR4",
      urlToImage: "https://i.ytimg.com/vi/F9TxfMx_OR4/maxresdefault.jpg",
      publishedAt: "2023-04-18T04:46:07Z",
      content: null,
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Mark Thiessen",
      title:
        "Odd spiral appears amid northern lights in Alaska night sky - The Associated Press",
      description:
        "ANCHORAGE, Alaska (AP) — Northern light enthusiasts got a surprise mixed in with the green bands of light dancing in the Alaska skies: A light baby blue spiral resembling a galaxy appeared amid the aurora for a few minutes.",
      url: "https://apnews.com/article/alaska-sky-spiral-aurora-northern-lights-90e767058f328bb95bab62c3f5bed1cc",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/2f5e47ea5055494e9303d97c39fa9d77/3000.webp",
      publishedAt: "2023-04-18T04:40:57Z",
      content:
        "ANCHORAGE, Alaska (AP) Northern light enthusiasts got a surprise mixed in with the green bands of light dancing in the Alaska skies: A light baby blue spiral resembling a galaxy appeared amid the aur… [+1939 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h2> Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={element.description.slice(0, 50)}
                  urlToImage={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
