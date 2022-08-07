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
    headline?: string;
    link: string;
    external?: boolean;
    id?: string;
};

export type ArticlePreview = SimpleCard & {
    text: string;
};
