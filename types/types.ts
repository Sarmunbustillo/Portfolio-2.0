type PreviewText = {
    previewText?: string;
};

type Markdown = {
    text: string;
};

export type ImageDetails = {
    image?: {
        url: string;
        height?: string;
        width?: string;
    };
};

type Default = {
    headline: string;
    id?: string | number;
};

export type SimpleCard = Default & {
    slug?: string;
    external?: boolean;
};

export type Project = SimpleCard &
    ImageDetails & {
        description: string;
        supportHeadline?: string;
        workDone: string[];
        technologies: string[];
    };

export type SnippetPreview = SimpleCard &
    PreviewText & {
        image: [
            img: {
                url: string;
            }
        ];
    };

export type PostPreview = SimpleCard & PreviewText & ImageDetails;

export type Post = PostPreview & ImageDetails & Markdown;

export type ParamsParsed = {
    [key: string]: {
        slug: string;
    };
};

export type MetaContainerType = {
    [key: string]: string;
};
