import fetchVans from "./fetchVans";
const Loader = () => {
  const vans = fetchVans();
  console.log("loader data is", vans);
  return vans;
};
export default Loader;
