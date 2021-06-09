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
              fluid(maxWidth: 400) {
                  src
              }
            }
          }
        }
      }
    `).allContentfulContactDetails;

  const contact = data.nodes[0];
  return contact;
};

export default useContactData;