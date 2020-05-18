export const aRoute = (e, props) => {
  e.preventDefault();
  const route = e.target.innerText.toLowerCase().replace(" ", "-");
  props.history.push(route);
};
