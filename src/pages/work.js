import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectOutline from '../components/ProjectOutline';
import Layout from '../components/Layout';
import '../styles/global.css';

export default function Work() {
    const data = useStaticQuery(graphql`
    query WorkPageQuery {
        allContentfulProjectOverview(sort: {order: ASC, fields: priority}) {
            totalCount
            nodes {
                title
                techStack
                contentful_id
                description {
                    description
                }
                gitHubLink
                appLink
                mainImage {
                    fluid {
                        src
                    }
                }
            }
        }
    }
`).allContentfulProjectOverview;

    console.log(data.nodes);
    const projects = data.nodes;

    // const renderProjects = () => {
    //     return data.nodes?.map(project => {
    //         return (
    //             <li key={project.contentful_id}>
    //                 <p>{project.title}</p>
    //                 <img src={project.mainImage.fluid.src} alt="project screenshot" />
    //             </li>)
    //     })
    // };

    return (
        <Layout>
            {/* <ul>{renderProjects()}</ul> */}
            {projects.map(project =>
                <ProjectOutline key={project.contentful_id} project={project} />
            )}
        </Layout>
    );
}