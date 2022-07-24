export type detailedProject = {
    imgPath: string;
    projectTitle: string;
    technologies: string[];
    projectDescription: string;
    workDone: string[];
    projectLink: string;
    layout?: string;
    id: string;
};

export type simpleProject = {
    imgPath: string;
    projectTitle: string;
    projectLink: string;
    id: string;
};
