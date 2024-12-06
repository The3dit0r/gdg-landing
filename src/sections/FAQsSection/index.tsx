import { useRef, useState } from "react";
import Icon from "../../components/Icon";
import "./index.css";
import { useChatContext } from "../ChattingSection/context";

const content = [
  {
    q: "Google Developer Groups (GDG) là gì?",
    a: "Google Developer Groups (GDG) là những tổ chức lớn nhất thế giới. Hơn 1000 GDG hiện đang có mặt tại hơn 140 quốc gia trên toàn cầu. Chương trình giúp các nhà phát triển kết nối với nhau và tìm hiểu về cách xây dựng sản phẩm của Google. Tại GDG, bạn sẽ được gặp gỡ những chuyên gia đầu ngành, luôn sẵn sàng chia sẻ kiến thức và đồng hành trong hành trình phát triển kỹ năng công nghệ của mình.",
  },
  {
    q: "Google Developer Groups on Campus (GDGoC) là gì?",
    a: "GDGoC là nhánh mở rộng của GDG, được thành lập dành riêng cho các bạn sinh viên đam mê công nghệ tại các trường đại học trên toàn thế giới. GDGoC là nơi bạn không chỉ được truyền cảm hứng mà còn có cơ hội thực hành và ứng dụng những công nghệ mới nhất vào thực tiễn.",
  },
  {
    q: "GDGoC có những hoạt động gì?",
    a: "Bên cạnh việc giao lưu học hỏi, chia sẻ kiến thức, kinh nghiệm nội bộ thì GDGoC chúng mình còn  thường xuyên phối hợp với các cộng đồng khác trong hệ sinh thái của Google địa phương để tăng thêm sự kết nối (mở rộng mqh) giữa các nhà phát triển có cùng đam mê công nghệ. Đặc biệt các bạn sẽ có cơ hội sử dụng miễn phí một số công nghệ của Google và tham gia các buổi DevFest - Hội nghị công nghệ do các nhóm phát triển của Google tổ chức (GDG) mang đến các chủ đề thú vị, cập nhật và hướng dẫn cách sử dụng các xu hướng công nghệ mới nhất của Google.  Không chỉ thế, GDGoC cũng là nơi để các bạn sinh viên tài năng có cơ hội thể hiện bản thân ở các cuộc thi mang tầm quốc tế của Google như Hackathon, Solution Challenge, etc.",
  },
  {
    q: "GDGoC PFTU sử dụng những công nghệ gì?",
    a: `- Frontend: ReactJS, Angular, VueJS.
- Backend: Python, NodeJS, Java.
- Mobile: Android native, Flutter.
- Google Services: Firebase, Vertex AI, Google Cloud, TensorFlow, JAX, Keras, etc.`,
  },
];

export default function FAQsSection() {
  const { setShowChat } = useChatContext();

  return (
    <div className="section">
      <h1
        style={{ fontSize: 45, color: "var(--accent)", textAlign: "center" }}
        id="section-faq"
      >
        Frequently Asked Question
      </h1>
      <div className="faq-frame flex aictr spbtw rainbow">
        Try using our AI powered Assistant to help you answer your inqueries
        <div className="btt" onClick={() => setShowChat(true)}>
          Open Chat
        </div>
      </div>
      <div>
        {content.map((a, i) => (
          <FAQFrame {...a} key={i} />
        ))}
      </div>
    </div>
  );
}

function FAQFrame({ q, a }: { q: string; a: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={expanded ? "faq-frame expanded" : "faq-frame"}
      style={{ "--a-height": ref.current?.clientHeight + "px" } as any}
    >
      <div
        className="q flexing flex spbtw aictr"
        onClick={() => setExpanded(!expanded)}
      >
        <div>{q}</div>
        <Icon name={"expand_circle_down"} clickable />
      </div>
      <div className="a" ref={ref}>
        {a}
      </div>
    </div>
  );
}
