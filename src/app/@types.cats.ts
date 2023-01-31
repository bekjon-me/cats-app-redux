// cat id
export type CatID = string;
// cat object
export type Cat = {
  id: string;
  name: string;
  color: string;
  age: number;
  hasCollar: boolean;
  image?: string;
  feedTime: number;
};
// cat state
export type CatsState = {
  catList: Cat[];
};
