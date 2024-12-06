import Icon from "../../components/Icon";
import "./index.css";

type Props = {};

export default function TheFoooooooooter({}: Props) {
  return (
    <div className="dft-footer flex aiart jcctr">
      <div className="flex spbtw" style={{ maxWidth: 1300, flex: 1 }}>
        <div>
          <div className="flex g16">
            <img src={window.location.origin + "/favicon.ico"} />
            <div>
              <div>
                <b>Google Development Group</b>
              </div>
              <div>On Campus • FPT University HCMC</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div>
            Fonts and Icons provided by{" "}
            <a href="https://fonts.google.com" target="_blank">
              Google Fonts
            </a>
          </div>
          <div>&copy;GDGoC FTPU HCM 2024 - All Right Reserved</div>
          <br />
          <div className="flex aictr g10">
            <Icon name="place" size="1.5em" />
            <div>
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ
              <br />
              Thành Phố Thủ Đức, Hồ Chí Minh 700000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
