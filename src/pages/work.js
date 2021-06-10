import React from 'react';

import Layout from '../components/organisms/layout';
import ProjectCard from '../components/organisms/projectcard';
import useProjectData from '../hooks/useprojectdata';
import '../styles/global.css';

const Work = () => {
    const projects = useProjectData();

    return (
        <Layout>
            {projects.map(project =>
                <ProjectCard key={project.contentful_id} project={project} />
            )}
        </Layout>
    );
};

export default Work;