import "./index.css";

import { EventObj, Events } from "./events";
import Icon from "../../components/Icon";

export default function EventList() {
  return (
    <div
      className="events"
      style={{
        padding: "60px var(--page-pad)",
      }}
    >
      <h1
        className="tactr"
        style={{ fontSize: 45, color: "var(--gg-blue)", marginBottom: 80 }}
        id="section-events"
      >
        Our Events
      </h1>

      {Events.map((event, i) => (
        <EventBox {...{ event, i }} key={i} />
      ))}
    </div>
  );
}

function EventBox({ event, i }: { event: EventObj; i: number }) {
  const { name, description, visuals, externalUrls, time } = event;

  return (
    <div
      className="event-box"
      style={{
        flexDirection: i % 2 === 0 ? "row" : "row-reverse",
        // borderTop: i ? "" : "2px solid",
      }}
    >
      <div
        className="banner"
        style={{
          backgroundImage: `url('${visuals.banner}')`,
        }}
      ></div>
      <div className="border"></div>
      <div className="info flex coll">
        <h1 style={{ textAlign: i % 2 !== 0 ? "left" : "right" }}>{name}</h1>

        <div className="para-test">{description}</div>
        <div className="flexing"></div>

        <div className={"flex aictr spbtw"}>
          <div
            className="btt flex aictr g10"
            onClick={() => {
              window.open(externalUrls.google, "_blank");
            }}
          >
            View more details
            <Icon name="open_in_new" />
          </div>

          <b>{time.display}</b>
        </div>
      </div>
    </div>
  );
}
