export type Band = {
  _id: string;
  name: string;
  genre: string;
  country: string;
  formationYear: number;
  members: string[];
  createdBy: {
    username: string;
  };
};

