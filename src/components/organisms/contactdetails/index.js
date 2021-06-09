import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../fontawesome';

// import GitHubLink from '../../atoms/githublink';

const ContactDetails = () => {
    const data = useStaticQuery(graphql`
    query ContactDetailsQuery {
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

    return (
        <div>
            <h2>You can find me here</h2>
            <p>{contact.email}</p>
            <div>
                {/* <GitHubLink /> */}
                <a href={contact.gitHubLink}>
                    <FontAwesomeIcon icon={['fab', 'github']} title="Hyun's GitHub account" />
                </a>
                <a href={contact.linkedInLink}>
                    <FontAwesomeIcon icon={['fab', 'linkedinIn']} title="Hyun's LinkedIn account" />
                </a>
                <a href={contact.twitterLink}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} title="Hyun's Twitter account" />
                </a>
            </div>
            <img src={contact.home.fluid.src} alt="Map of Hyun's location" />
        </div>
    );
}

export default ContactDetails;