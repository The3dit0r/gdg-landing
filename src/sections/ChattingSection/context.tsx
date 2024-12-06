import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import ChattingSection from ".";
import axios, { AxiosResponse } from "axios";
import { getChatServer } from "../../util";

export type ChatType = {
  messages: { is_user?: boolean; message: string; timestamp: number }[];
  showChat: boolean;
  loading: boolean;

  setShowChat: (a: boolean) => void;
  setLoading: (a: boolean) => void;
  addMessage: (message: string, is_user?: boolean) => void;
};

const ChatContext = createContext<ChatType>({
  messages: [],
  showChat: false,
  loading: false,
  setShowChat() {},
  addMessage() {},
  setLoading() {},
});

async function retieveMessage(
  m: string
): Promise<AxiosResponse<{ message: string; assistant: string }>> {
  const options = {
    method: "POST",
    url: getChatServer(),
    headers: { "Content-Type": "application/json" },
    data: { message: m },
  };

  return await axios.request(options);
}

export function ChatContextProvider({ children }: { children: ReactNode }) {
  const [showChat, setShowChat] = useState(false);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      timestamp: new Date().getTime(),
      message:
        "Hey, I am the club assistant, powered by AI. How may I assist you today?",
    },
  ]);

  useEffect(() => {
    if (!loading) return;
  }, [loading]);

  function addMessage(message: string, is_user?: boolean) {
    message = message.trim();

    if (!message) return console.log("Message is empty");
    if (loading) return console.log("Previous result is loading");

    const msg = {
      message,
      is_user,
      timestamp: new Date().getTime(),
    };

    setMessages((a) => [...a, msg]);

    if (is_user) {
      setTimeout(() => setLoading(true), 500);
      sendMessage(message);
    }
  }

  async function sendMessage(m: string) {
    m = m.trim();
    if (!m) return;

    try {
      const { data } = await retieveMessage(m);
      addMessage(data.assistant);
    } catch (err: any) {
      addMessage(
        "Sorry, but I cannot response to your previous message.\nError: " +
          err.message
      );
    }

    setLoading(false);
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        showChat,
        loading,

        setShowChat,
        addMessage,
        setLoading,
      }}
    >
      {children}
      <ChattingSection
        {...{
          messages,
          showChat,
          setShowChat,
          addMessage,
          setLoading,
          loading,
        }}
      />
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const data = useContext(ChatContext);
  return data;
}
