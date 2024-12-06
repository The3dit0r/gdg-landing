import Icon from "../../components/Icon";
import "./index.css";

type Props = {};

export default function TestSection({}: Props) {
  return (
    <div className="section dft-test flex coll jcctr  aictr">
      <div className="banner"></div>
      <h1 style={{ textAlign: "center" }}>
        Welcome to
        <br />
        <span style={{ fontSize: "1.1em  " }}>
          GDG on Campus FPT University - Ho Chi Minh City, Vietnam
        </span>
      </h1>

      <div className="flex coll aictr g10" style={{ marginTop: 36 }}>
        <div>Scroll for more</div>
        <Icon
          name="keyboard_arrow_down"
          className="move-up-down"
          style={{ "--dy": "4px" } as any}
        />
      </div>
    </div>
  );
}
