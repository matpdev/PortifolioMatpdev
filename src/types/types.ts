export type RepoType = {
  name: string;
  role: string;
  timeStart: string;
  timeEnd: string;
  testemonials: string[];
  isSelected: boolean;
};

export type RepoWorks = {
  name: string;
  description: string;
  links: {
    linkedin?: string;
    github?: string;
    site?: string;
  };
  stacks: string[];
};
