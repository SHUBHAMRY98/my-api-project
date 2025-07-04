import Head from "next/head";
import React from "react";

export const config = {
  unstable_runtimeJS: false,
};

const Meta = ({
  title = "Click N Event",
  description = "",
  keywords = "",
  canonical = "",
  children,
  script,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <link rel="canonical" href={canonical} />
      {/* <link
        rel="shortcut icon"
        href="https://www.xyz.com/image_xca.png"
      /> */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {children}
      {script}
    </Head>
  );
};

export const SeoMeta = React.memo(Meta);
