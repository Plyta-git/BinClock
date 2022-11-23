import { useEffect, useState } from "react";

type BoxProps = {
  children?: React.ReactNode;
  isAcrive?: boolean;
};

const Dot = ({ isAcrive, children }: BoxProps) => {
  const color = isAcrive
    ? " bg-active drop-shadow-glow "
    : " bg-noActive shadow-[inset_0_0px_6px_#222831]";
  return (
    <div title={`${children}`}
      className={`transition-all duration-300 rotate-180 my-2 mx-1 w-10 h-10 ${color} rounded-full `}
    >
    </div>
  );
};

const App = () => {
  const inTimeState: Array<Array<string>> = [
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
  ];
  const [time, setTime] = useState(inTimeState);

  useEffect(() => {
    setInterval(() => {
      let now = new Date();
      setTime([
        now.getHours().toString(2).padStart(8, "0").split("").reverse(),
        now.getMinutes().toString(2).padStart(8, "0").split("").reverse(),
        now.getSeconds().toString(2).padStart(8, "0").split("").reverse(),
      ]);
      console.log(time);
    }, 1000);
  }, []);

  return (
    <div className=" bg-BG flex justify-center items-center w-screen h-screen">
      {time.map((e, id) => (
        <div
          key={id}
          className=" rotate-180 grid-flow-col grid grid-rows-4 mx-6"
        >
          {e.map((x, id) => (
            <Dot key={id} isAcrive={x == "1"}>
              {Math.pow(2, id)}
            </Dot>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
