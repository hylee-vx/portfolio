import React from 'react';

import Layout from '../components/layout';
import ProjectCard from '../components/projectCard';
import useProjectData from '../hooks/useprojectdata';
import './work.css';
import '../styles/global.css';

const Work = () => {
    const projects = useProjectData();

    return (
        <Layout>
            <h1 className="work-heading">Projects</h1>
            {projects.map(project =>
                <ProjectCard key={project.contentful_id} project={project} />
            )}
        </Layout>
    );
};

export default Work;