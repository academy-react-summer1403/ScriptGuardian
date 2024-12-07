import React from "react";
import { Form, useParams } from "react-router-dom";
import DetailsBigImage from "../../images/NewsDetails/Rectangle 34.png";
import DetailsSmallImage from "../../images/NewsDetails/Rectangle 16.png";
import Poster from "../../images/NewsDetails/Poster.png";
import { TopDetails } from "../../components/DetailNews/TopDetails";
import { MidDetails } from "../../components/DetailNews/MidDetails";
import { CommentDetails } from "../../components/DetailNews/CommentDetails";
import { useDetailNews } from "../../core/services/api/DetailNews/DetailNews";
const DetailsNews = () => {
  const { id } = useParams();

  //API

  const { data } = useDetailNews(id);
  // console.log(data?.detailsNewsDto, "DetailNews");
  const detailsNewsDto = data?.detailsNewsDto;
  console.log(detailsNewsDto, "DetailNews2");
  // console.log(data?.detailsNewsDto, "DetailNews");
  const commentDtos = data?.commentDtos;
  return (
    <>
      <TopDetails
        title={detailsNewsDto?.title}
        currentImageAddress={detailsNewsDto?.currentImageAddress}
        miniDescribe={detailsNewsDto?.miniDescribe}
        currentView={detailsNewsDto?.currentView}
        addUserFullName={detailsNewsDto?.addUserFullName}
        id={detailsNewsDto?.id}
        isCurrentUserFavorite={detailsNewsDto?.isCurrentUserFavorite}
        currentUserFavoriteId={detailsNewsDto?.currentUserFavoriteId}
        insertDate={detailsNewsDto?.insertDate}
      />
      <MidDetails
        currentUserSetRate={detailsNewsDto?.currentUserSetRate}
        currentUserRateNumber={detailsNewsDto?.currentUserRateNumber}
        id={detailsNewsDto?.id}
        currentLikeCount={detailsNewsDto?.currentLikeCount}
        currentDissLikeCount={detailsNewsDto?.currentDissLikeCount}
        currentUserIsLike={detailsNewsDto?.currentUserIsLike}
        currentUserIsDissLike={detailsNewsDto?.currentUserIsDissLike}
        likeId={detailsNewsDto?.likeId}
      />
      <CommentDetails commentDtos={commentDtos} newsId={id} />
    </>
  );
};

export { DetailsNews };
