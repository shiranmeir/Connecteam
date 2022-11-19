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
        <>
          {/* {field.name === "Facere ipsa quod" ? null : (
            <div className={classes.labelInput}>{field.name}</div>
          )} */}
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
        </>
      )}
    </>
  );
};
export default FormField;
