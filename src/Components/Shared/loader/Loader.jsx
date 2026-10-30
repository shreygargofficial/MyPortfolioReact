import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.root}>
      <div className={css.loader}></div>
    </div>
  );
}

export default Loader;
