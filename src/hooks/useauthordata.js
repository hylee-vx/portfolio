import { useStaticQuery, graphql } from 'gatsby';

const useAuthorData = () => {
    const data = useStaticQuery(graphql`
        query AuthorDataQuery {
            allContentfulAuthor {
                nodes {
                    heading
                    mainImage {
                        gatsbyImageData(width: 600)
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
    return author;
};

export default useAuthorData;