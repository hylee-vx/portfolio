import React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import { useStaticQuery, graphql } from "gatsby"

export default function Work() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulProjectDetail(sort: {order: ASC, fields: title}) {
                totalCount
                nodes {
                    createdAt(fromNow: true)
                    title
                    techStack
                    contentful_id
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
    `).allContentfulProjectDetail;

    const renderProjects = () => {
        return data.nodes?.map(project => {
            return (
                <li key={project.contentful_id}>
                    <p>{project.title}</p>
                    <img src={project.mainImage.fluid.src} />
                </li>)
        })
    };

    return (
        <Layout>
            <h1>Hello</h1>
            <p>I've waited here for you</p>
            <p>There are {data.totalCount} projects</p>
            <ul>{renderProjects()}</ul>
        </Layout>
    );
}