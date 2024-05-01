import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  const elements = [
    {
      text: "Button 1",
      warning: "Xəbərdarlıq 1",
      hint: "Button 1in popupu",
    },
    {
      text: "Button 2",
      warning: "Xəbərdarlıq 2",
      hint: "Button 2in popupu",
    },
    {
      text: "Button 3",
      warning: "Xəbərdarlıq 3",
      hint: "Button 3ün popupu",
    },
  ];

  return (
    <>
      <div>
        {elements.map((item, index) => {
          return (
            <CustomButton
              key={index}
              text={item.text}
              warnMessage={item.warning}
              hint={item.hint}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
