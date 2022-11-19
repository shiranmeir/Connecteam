import { useState } from "react";
import FormField from "./FormField";
import classes from "./style.module.scss";

const Form = ({ form }) => {
  const [userInput, setUserInput] = useState({
    enteredFacere: "",
    enteredNeque: "",
    enteredQuod: "",
    enteredEius: "",
    enteredDolores: "",
    enteredQui: "",
  });

  const userChangeHandler = (e, index) => {
    console.log(e, index);
    if (index === 0) {
      setUserInput((prevState) => {
        return { ...prevState, enteredFacere: e.target.value };
      });
    } else if (index === 1) {
      setUserInput((prevState) => {
        return { ...prevState, enteredNeque: e.target.value };
      });
    } else if (index === 2) {
      setUserInput((prevState) => {
        return { ...prevState, enteredQuod: e.target.value };
      });
    } else if (index === 3) {
      setUserInput((prevState) => {
        return { ...prevState, enteredEius: e.target.value };
      });
    } else if (index === 4) {
      setUserInput((prevState) => {
        return { ...prevState, enteredDolores: e.target.value };
      });
    } else if (index === 5) {
      setUserInput((prevState) => {
        return { ...prevState, enteredQui: e.target.value };
      });
    }
  };
  console.log(userInput);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);

    setUserInput({
      enteredFacere: "",
      enteredNeque: "",
      enteredQuod: "",
      enteredEius: "",
      enteredDolores: "",
      enteredQui: "",
    });
  };
  return (
    <div className={classes.form}>
      <p>{form.title}</p>
      <form className={classes.inputConteiner} onSubmit={submitHandler}>
        {form?.fields?.map((field, index) => {
          return (
            <FormField
              field={field}
              index={index}
              userChangeHandler={userChangeHandler}
              userInput={userInput}
            />
          );
        })}
        <button className={classes.btn} type="submit">
          {form.submitLabel} →
        </button>
      </form>
    </div>
  );
};

export default Form;
