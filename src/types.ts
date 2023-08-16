export type ProjectDetail = {
  name: string;
  desc: string;
  url: string;
  git: string;
  technology: string;
  img: Array<string>;
};

export type ProjectsData = Record<string, ProjectDetail>;
