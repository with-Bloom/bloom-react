type GetRandomText = (arr: string[]) => string;

export const getRandomText: GetRandomText = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
