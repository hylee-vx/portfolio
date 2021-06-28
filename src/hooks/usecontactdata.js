import { useStaticQuery, graphql } from 'gatsby';

const useContactData = () => {
  const data = useStaticQuery(graphql`
    query ContactDataQuery {
        allContentfulContactDetails {
          nodes {
            email
            gitHubLink
            linkedInLink
            twitterLink
            home {
              gatsbyImageData(width: 450)
            }
          }
        }
      }
    `).allContentfulContactDetails;

  const contact = data.nodes[0];
  return contact;
};

export default useContactData;