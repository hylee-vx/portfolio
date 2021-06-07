import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Hyun = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      allContentfulAuthor {
        nodes {
          name
          heading
          mainImage {
            fluid {
              src
            }
          }
          bio {
            bio
          }
          gitHubLink
          linkedInLink
          twitterLink
          cvLink
        }
      }
    }
  `).allContentfulAuthor;

  const author = data.nodes[0];

  return (
    <div>
      <h1>{author.heading} {author.name}</h1>
      <img src={author.mainImage.fluid.src} alt="Hyun standing on beach" />
      <p>{author.bio.bio}</p>
      <br />
      <a href={author.gitHubLink}>See more work</a>
    </div>
  );
};

export default Hyun;