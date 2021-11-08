export const Printsites = (props) => {
  return (
    <div id="sites">
      <ul>
        {props.data
          ? props.data.links.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
          : "loading"}
      </ul>
    </div>
  );
};
