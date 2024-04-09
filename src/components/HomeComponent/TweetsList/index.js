import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images";
import Tweet from "./Tweet";
export default function TweetsList() {
  const tweets = [
    {
      authorName: "Free KZ today",
      authorUsername: "@kz",
      img: KZ_IMG_PATH,
      content:
        "UPDATE: Alibek says he has not considered becoming finance minister again",
      replies: 200,
      retweets: 1000,
      likes: 500,
    },
    {
      authorName: "nFactorial",
      authorUsername: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Data Analytica course starts today!",
      replies: 3425,
      retweets: 1523,
      likes: 18123,
    },
    {
      authorName: "nFactorial",
      authorUsername: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Black Friday! Успей купить курсы",
      replies: 486,
      retweets: 563,
      likes: 6123,
    },
    {
      authorName: "Free KZ today",
      authorUsername: "@kz",
      img: KZ_IMG_PATH,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
      replies: 54,
      retweets: 130,
      likes: 533,
    },
    {
      authorName: "nFactorial",
      authorUsername: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Онлайн встреча выпусников",
      replies: 34,
      retweets: 72,
      likes: 176,
    },
    {
      authorName: "nFactorial",
      authorUsername: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content:
        "Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников Онлайн встреча выпусников ",
      replies: 34,
      retweets: 72,
      likes: 176,
    },
    {
      authorName: "nFactorial",
      authorUsername: "@nfactorial",
      img: NFACTORIAL_IMG_PATH,
      content: "Онлайн встреча выпусников",
      replies: 34,
      retweets: 72,
      likes: 176,
    },
  ];
  return tweets.map((tweet, index) => <Tweet {...tweet} key={index} />);
}
