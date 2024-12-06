import "./index.css";
import Icon from "../../components/Icon";

type Props = {};

const imgs = ["trietnm", "cuongqt", "khanhmnd", "tuannd", "nhunth"];

const paths = [
  {
    fill: "#E94436",
    d: "M40.8,-73.9C51.9,-64.2,59.3,-51.3,64.6,-38.5C70,-25.6,73.3,-12.8,76.4,1.8C79.6,16.5,82.6,32.9,78.1,47.3C73.7,61.7,61.8,74.1,47.5,79.1C33.3,84,16.6,81.5,0.2,81.2C-16.3,81,-32.7,82.9,-46.5,77.7C-60.3,72.5,-71.6,60.2,-77.3,46C-83,31.9,-83.2,15.9,-82,0.7C-80.7,-14.5,-78,-29,-70.4,-39.9C-62.8,-50.7,-50.2,-57.9,-37.6,-66.7C-25.1,-75.5,-12.5,-85.9,1.2,-87.9C14.8,-89.9,29.7,-83.5,40.8,-73.9Z",
  },
  {
    fill: "#109d58",
    d: "M40.4,-67.6C54.1,-62,68.3,-54.8,77.1,-43.3C85.9,-31.8,89.4,-15.9,87.1,-1.3C84.9,13.3,77,26.6,69.8,40.9C62.6,55.1,56,70.3,44.4,78.6C32.9,86.9,16.5,88.3,1.4,85.9C-13.7,83.5,-27.4,77.4,-41.4,70.5C-55.3,63.6,-69.4,55.9,-76.6,44C-83.9,32.2,-84.1,16.1,-81.7,1.4C-79.3,-13.3,-74.2,-26.6,-66.5,-37.6C-58.8,-48.6,-48.5,-57.4,-37,-64.3C-25.5,-71.1,-12.7,-76,0.3,-76.5C13.3,-77,26.6,-73.1,40.4,-67.6Z",
  },
  {
    fill: "#4385F3",
    d: "M40.7,-70.1C52.3,-63.7,61.1,-52.1,68.4,-39.5C75.7,-26.9,81.5,-13.5,83.3,1.1C85.2,15.6,83.2,31.2,75.1,42.4C67,53.5,52.8,60.2,39.2,68.8C25.7,77.4,12.9,88,-0.6,88.9C-14,89.9,-28,81.3,-42.3,73.2C-56.6,65,-71.3,57.3,-78.5,45.2C-85.7,33.1,-85.4,16.5,-85.5,0C-85.6,-16.6,-86,-33.3,-78.2,-44.3C-70.4,-55.4,-54.4,-60.9,-40,-65.7C-25.6,-70.5,-12.8,-74.5,0.9,-76C14.5,-77.5,29,-76.4,40.7,-70.1Z",
  },
  {
    fill: "#FABC05",
    d: "M43.3,-76.8C55.1,-68.2,62.9,-54.5,67.7,-40.9C72.5,-27.2,74.1,-13.6,76.3,1.3C78.5,16.1,81.2,32.3,75.8,44.8C70.4,57.4,56.9,66.4,43,72.8C29,79.2,14.5,83,0.7,81.9C-13.2,80.7,-26.4,74.6,-38.5,67.2C-50.6,59.7,-61.7,50.9,-67.7,39.4C-73.7,28,-74.6,14,-75,-0.2C-75.3,-14.4,-75.1,-28.9,-70,-41.7C-64.8,-54.5,-54.6,-65.8,-42.2,-74.1C-29.7,-82.4,-14.8,-87.7,0.5,-88.5C15.7,-89.3,31.5,-85.5,43.3,-76.8Z",
  },
  {
    fill: "#FF0066",
    d: "M36.5,-63.9C47.9,-56.7,58,-48,67.6,-37.1C77.3,-26.2,86.4,-13.1,89.3,1.6C92.1,16.4,88.6,32.7,79.4,44.5C70.2,56.2,55.4,63.3,41.3,70.6C27.1,77.8,13.5,85.2,0,85.2C-13.5,85.2,-27.1,77.8,-39.4,69.5C-51.7,61.1,-62.8,51.9,-72.7,40.2C-82.6,28.5,-91.2,14.2,-90.2,0.6C-89.2,-13.1,-78.6,-26.2,-69.6,-39.5C-60.7,-52.8,-53.4,-66.3,-42,-73.5C-30.7,-80.7,-15.4,-81.5,-1.4,-79.2C12.6,-76.8,25.2,-71.1,36.5,-63.9Z",
  },
];

const info: { [n: string]: { name: string; position: string } } = {
  trietnm: {
    name: "Nguyen Minh Triet",
    position: "Organizer, Chapter Lead",
  },
  cuongqt: {
    name: "Tran Quoc Cuong",
    position: "Consultant, Pre-Organizer",
  },
  nhunth: {
    name: "Nguyen Thi Huynh Nhu",
    position: "Co-Chapter Lead",
  },
  khanhmnd: {
    name: "Mai Nguyen Duy Khanh",
    position: "Co-Chapter Lead",
  },
  tuannd: {
    name: "Nguyen Duc Tuan",
    position: "Technical Advisor",
  },
};

export default function TeamMembers({}: Props) {
  return (
    <div className="team-members">
      <h1
        style={{ fontSize: 45, color: "var(--gg-green)" }}
        className="tactr"
        id="section-members"
      >
        Organizers & Club Members
      </h1>

      <div className="sect-members">
        {imgs.map((a, i) => {
          return (
            <div className={"frame " + a} key={i}>
              <SVGClipImage
                url={window.location.origin + "/members/" + a + ".png"}
                path={paths[i]}
                id={a}
              />

              <div className="info-box">
                <h1 className="name">{info[a].name}</h1>
                <div className="pos">{info[a].position}</div>
              </div>
            </div>
          );
        })}

        <div className="frame flex aictr jcctr coll special">
          <b>View All Member</b>
          <div style={{ height: 32 }}></div>
          <div className="flex aictr jcctr circle-button">
            <Icon name="arrow_right_alt" color="#ffff" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SVGClipImage({
  url,
  path: pathProps,
  id,
}: {
  url: string;
  path: { d: string; fill: string };
  id: string;
}) {
  const path = <path {...pathProps} transform="translate(100 105)" />;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={"path-" + id}>{path}</clipPath>
      </defs>
      {path}

      <image
        width="200"
        height="260"
        clipPath={`url(#path-${id})`}
        xlinkHref={url}
      ></image>
    </svg>
  );
}
