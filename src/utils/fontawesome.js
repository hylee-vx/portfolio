import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faCode,
    faLink,
    faEnvelope,
    faGraduationCap,
    faFilePdf,
    faChevronRight,
    faHeart,
    faMugHot,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
    faGithub,
    faLinkedinIn,
    faTwitter,
    faCode,
    faLink,
    faEnvelope,
    faGraduationCap,
    faFilePdf,
    faChevronRight,
    faHeart,
    faMugHot,
);