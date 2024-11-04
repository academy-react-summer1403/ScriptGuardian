import React from "react";
import { Form, useParams } from "react-router-dom";
import DetailsBigImage from "../../images/NewsDetails/Rectangle 34.png";
import DetailsSmallImage from "../../images/NewsDetails/Rectangle 16.png";
import Poster from "../../images/NewsDetails/Poster.png";
import { TopDetails } from "../../components/DetailNews/TopDetails";
import { MidDetails } from "../../components/DetailNews/MidDetails";
import { Formik } from "formik";
import commentProfile from "../../images/NewsDetails/Unsplash-Avatars_0005s_0017_harps-joseph-tAvpDE7fXgY-unsplash.png";
import { CommentDetails } from "../../components/DetailNews/CommentDetails";
import { useDetailNews } from "../../core/services/api/DetailNews/DetailNews";
const DetailsNews = () => {
  const { id } = useParams();

  //API

  const { data } = useDetailNews(id);
  return (
    <>
      <TopDetails
        title={data?.title}
        currentImageAddress={data?.currentImageAddress}
        miniDescribe={data?.miniDescribe}
      />
      <MidDetails />
      <CommentDetails />
    </>
  );
};

export { DetailsNews };
