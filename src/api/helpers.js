const buildHostUrl = path => {
    return buildUrl("http://localhost:3001/api", path);
};
  
const buildUrl = (parent, child) => {
    return `${parent}/${child}`;
};

export { buildHostUrl, buildUrl };
  