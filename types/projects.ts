export type SimpleProject = {
    imgPath: string;
    projectTitle: string;
    projectLink: string;
    id: string | number;
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
    slug: string;
    external?: boolean;
    id?: string | number;
};

export type ArticlePreview = SimpleCard & {
    previewText: string;
};

export type Article = {
    headline: string;
    text: string;
    previewText?: string;
    image: {
        url: string;
        height: string;
        width: string;
    };
};

export type ParamsParsed = {
    [key: string]: {
        slug: string;
    };
};

export type MetaContainerType = {
    children?: JSX.Element | JSX.Element[];
    [key: string]: any;
};
