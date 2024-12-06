import { useState } from "react";
import "./index.css";
import Icon from "../../components/Icon";

type Props = {};

const content = [
  {
    artName: "take",
    text: `We believe in taking initiative and embracing the challenge of coding. Whether you're a beginner or an experienced programmer, taking the first step in learning and growing together is the foundation of our club. We encourage every member to take ownership of their journey, explore new technologies, and push their boundaries.`,
  },
  {
    artName: "target",
    text: `Our goal is clear — we aim to foster a community of problem-solvers and innovators. By setting specific targets, whether it's mastering a new programming language, completing a project, or solving a complex algorithm, we ensure that every member has a meaningful objective to work toward. A focused target helps guide our efforts and measure our progress.`,
  },
  {
    artName: "together",
    text: `Collaboration is key. In our club, we believe that working together is what makes coding truly exciting and rewarding. Through teamwork, sharing knowledge, and supporting one another, we can achieve more than we ever could alone. By combining our strengths and learning from each other, we create a stronger, more inclusive coding community where everyone can thrive.`,
  },
];

export default function SloganPart({}: Props) {
  const [state, setState] = useState(0);

  return (
    <>
      <div className="slogans flex aictr test">
        <div style={{ width: "20%" }} className="box def flex aictr spbtw">
          <div>
            <div style={{ fontSize: 15 }}>Our Slogan</div>
            <div style={{ fontSize: 100, fontWeight: "bold", lineHeight: 1 }}>
              3T
            </div>
          </div>

          <Icon name="east" size="1em" />
        </div>
        {["ake", "arget", "ogether"].map((a, i) => (
          <div
            className={"box flex aictr" + (i === state ? " active" : "")}
            onClick={() => setState(i)}
            key={i}
          >
            <b>T</b>
            {a}
          </div>
        ))}
      </div>

      <div
        style={{
          width: "calc(100% - 32px)",
          padding: 16,
          height: "calc(100vh - 290px)",
          animationDuration: "0.3s",
        }}
        className="test flex aictr fade-in"
        key={state}
      >
        <div className={"flexing clip-art " + content[state].artName}></div>
        <div
          className="content"
          style={{
            width: "50%",
            paddingTop: 18,
            lineHeight: 1.75,
            padding: 50,
          }}
        >
          {content[state].text}
        </div>
      </div>
    </>
  );
}
