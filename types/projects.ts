export type SimpleProject = {
    imgPath: string;
    projectTitle: string;
    projectLink: string;
    id: string;
};

export type DetailedProject = SimpleProject & {
    technologies: string[];
    projectDescription: string;
    workDone: string[];
    layout?: string;
    supportHeadline?: string;
};

export type SimpleCard = {
    text: string;
    link: string;
    external?: boolean;
    id?: string;
};
