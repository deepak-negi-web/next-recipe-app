import Head from "next/head";
import React from "react";
export default function Seo(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content={props.image} />
    </Head>
  );
}
