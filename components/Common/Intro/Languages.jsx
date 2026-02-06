import { Progress } from "antd";
import { useEffect, useState } from "react";

const TARGETS = [
  { label: "Chinese (Mandarin)", target: 100 },
  { label: "English", target: 95 },
  { label: "Japanese", target: 30 },
];

const Languages = () => {
  const [percents, setPercents] = useState(TARGETS.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setPercents((prev) =>
        prev.map((p, i) => (p < TARGETS[i].target ? p + 1 : p))
      );
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>

        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
          {TARGETS.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-y-2"
            >
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={percents[i]}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
