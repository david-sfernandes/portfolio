export type Project = {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  tech_list: string[];
  url: string;
  repository_url: string;
  image_url: string;
};

export type PropsWithDictionary = { dictionary: Record<string, Any> };
