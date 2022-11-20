import classes from "./style.module.scss";

const FormField = ({ field, index, userChangeHandler, userInput }) => {
  return (
    <>
      {field.layout === "select" ? (
        <select
          className={classes.select}
          onChange={(e) => userChangeHandler(e, index)}
        >
          {field.options.map((option) => {
            return <option value={option.label}>{option.label}</option>;
          })}
        </select>
      ) : field.layout === "buttons" ? (
        <div>
          <label className={classes.labelButton}>{field.name}</label>
          <div className={classes.inputButtons}>
            {field.options.map((option) => {
              return (
                <>
                  <input
                    onChange={(e) => userChangeHandler(e, index)}
                    type="radio"
                    key={option.value}
                    value={option.label}
                    id={option.label}
                    name="btn"
                  />
                  <label for={option.label}>{option.label}</label>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <input
            placeholder={
              field.name === "Facere ipsa quod" && "Facere ipsa quod"
            }
            className={classes.input}
            type={field.type}
            value={userInput.name}
            onChange={(e) => userChangeHandler(e, index)}
            data-type={field.type}
          />
          {field.name === "Facere ipsa quod" ? null : (
            <label className={classes.labelInput}>{field.name}</label>
          )}
        </div>
      )}
    </>
  );
};
export default FormField;
