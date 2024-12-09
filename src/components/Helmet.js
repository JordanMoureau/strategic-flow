import { Helmet } from "react-helmet";

const HelmetWrapper = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      <title>{title || "Strategic Flow | Leadership You Can Count On"}</title>
      <meta
        name="description"
        content={
          description ||
          "Strategic Flow brings Fortune 500 strategies to small teams for leadership you can count on and systems that scale."
        }
      />
      <meta
        name="keywords"
        content={
          keywords || "Leadership, Business Strategy, Team Building, Scaling"
        }
      />
      <meta property="og:title" content={title || "Strategic Flow"} />
      <meta
        property="og:description"
        content={
          description ||
          "Learn more about how Strategic Flow empowers small teams with leadership strategies."
        }
      />
      <meta
        property="og:image"
        content={image || "https://strategicflow.org/default-image.jpg"}
      />
      <meta property="og:url" content={url || "https://strategicflow.org"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default HelmetWrapper;
