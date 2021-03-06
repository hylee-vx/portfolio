import { useStaticQuery, graphql } from 'gatsby';

const useProjectData = () => {
    const data = useStaticQuery(graphql`
        query ProjectDataQuery {
            allContentfulProjectOverview(sort: {order: ASC, fields: priority}) {
                nodes {
                    title
                    techStack
                    contentful_id
                    description {
                        description
                    }
                    appLink
                    gitHubLink
                    mainImage {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
    `).allContentfulProjectOverview;

    const projects = data.nodes;
    return projects;
};

export default useProjectData;