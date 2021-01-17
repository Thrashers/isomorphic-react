// If file in __mocks__ has same name as a package in node_modules, it will be used when importing into tests
// __mocks__ must be adjacent to node_modules in dir structure

let __value = 42;
const isomorphicFetch = jest.fn(() => __value); // Spy function
isomorphicFetch.__setValue = (v) => (__value = v);
export default isomorphicFetch;
