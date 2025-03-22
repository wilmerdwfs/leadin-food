import React, { useEffect, useRef, useState } from "react";
import Input from "../Ui/Input";
import TheButton from "../Ui/TheButton";
import Tooltip from "../Ui/ToolTip";
import classes from "../Ui/ToolTip.module.css";


// Definimos las props que esperamos recibir
interface HeroThreeFormProps {
  onAddToCart: (amount: number) => void;
}

const HeroThreeForm: React.FC<HeroThreeFormProps> = (props) => {
  //using useRef and useState hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  //END

  //Handling user data amount submission
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //Prevent server side handling of inputted data
    event.preventDefault();
    //END

    //Accepting data using useref, converting the data into a string,
    const enteredAmount = inputRef.current?.value || "";
    const enteredAmountNumber = +enteredAmount;
    //END

    //Checking and ensuring accepted data is between 1 to 5
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //END

    //Passing accepted data to the HeroThreeSection component via prop
    props.onAddToCart(enteredAmountNumber);
    //END
  };
  //END

  //Dislaying Tooltips on dishes added to the menu
  const ontooltipHandler = () => {
    setShowTooltip(true);
  };

  const tipShow = `${showTooltip ? classes.show : ""}`;

  useEffect(() => {
    if (showTooltip === false) {
      return;
    }

    const toolTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => {
      clearTimeout(toolTimer);
    };
  }, [showTooltip]);
  //END

  //Layout and structure of form to be passed to the HeroThreeSection component
  return (
    <>
      <Tooltip className={tipShow} />
      <form onSubmit={onSubmitHandler}>
        <Input
          ref={inputRef}
          input={{
            id: String(Math.random() * 10),
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <TheButton type="submit" onClick={ontooltipHandler}>
          <i className="bi bi-plus"></i> Añadir
        </TheButton>
        {/*Error message to be displayed on incorrect user input */}
        {!amountIsValid && (
          <p>Input is invalid, Pleae Input a amount between 1 and 5</p>
        )}
        {/*END */}
      </form>
    </>
  );
};
//END

export default HeroThreeForm;
