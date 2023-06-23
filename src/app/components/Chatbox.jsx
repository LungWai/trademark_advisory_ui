import { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  styled,
  TextField,
  useTheme,
  Button,
  ButtonGroup
} from "@mui/material";
import {
  AlignHorizontalLeft,
  Attachment,
  Clear,
  Construction,
  TextSnippet
} from "@mui/icons-material";
import ScrollBar from "react-perfect-scrollbar";
import { H5, H6, Span } from "./Typography";
import { ChatAvatar } from "app/components";
import { convertHexToRGB } from "app/utils/utils";
import WorkIcon from "@mui/icons-material/Work";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ApprovalIcon from "@mui/icons-material/Approval";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchAction } from "../redux/features/actions/actionSlices";

const Chat = ({ item, currentUserId, key, primary, children }) => {
  return (
    <Box
      key={key}
      // p="20px"
      p="5px" // can adjust
      display="flex"
      sx={{ justifyContent: currentUserId === item.id && "flex-end" }}
    >
      {currentUserId !== item.id && <Avatar src={item.avatar} />}
      <Box ml="2px">
        {currentUserId !== item.id && (
          <H5 mb={0.5} fontSize={14} color={primary}>
            {item.speaker}
          </H5>
        )}
        <ChatMessage>{item.message}</ChatMessage>
        {children}
      </Box>
    </Box>
  );
};

// STYLED COMPONENTS
const ChatContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#fff"
});

const StyledScrollBar = styled(ScrollBar)({
  flexGrow: 1
});

const ProfileBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 12px 12px 20px",
  color: theme.palette.primary.main,
  background: "#fafafa"
}));

const ChatStatus = styled("div")(({ theme }) => ({
  marginLeft: "12px",
  color: theme.palette.primary.main,
  "& h5": {
    marginTop: 0,
    fontSize: "14px",
    marginBottom: "3px"
  },
  "& span": { fontWeight: "500" }
}));

const ChatMessage = styled("div")(({ theme }) => ({
  padding: "8px",
  // maxWidth: 240,
  maxWidth: 600, // can adjust
  fontSize: "13px",
  borderRadius: "4px",
  marginBottom: "8px",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  color: theme.palette.primary.main,
  background: "#fafafa",
  lineHeight: "1.2"
}));

const MessageTime = styled("span")(({ theme }) => ({
  fontSize: "13px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

const ChatImgContainer = styled("div")({
  padding: "20px",
  display: "flex",
  justifyContent: "flex-end"
});

const ChatImgBox = styled("div")(({ theme }) => ({
  padding: "8px",
  fontSize: "14px",
  maxWidth: 240,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  color: theme.palette.primary.main,
  background: "#fafafa"
}));

const ChatImg = styled("img")(() => ({ width: "40px" }));

// for previewing bot message
const globalMessageList = [];

// const ROBOT = "TrademarkRobot";
const ROBOT = "Trademark Advisor";
const HUMAN = "you";
// const ROBOTICON = "/assets/images/robot.jpg";
const ROBOTICON = "/assets/images/robot-4.png";
const HUMANICON = "/assets/images/face-2.jpg";
const CURRENTUSERID = "7863a6802ez0e277a0f98534";

const ACTION = {
  normalChat: "NORMALCHAT",
  businessNatureAnalysis: "BusinessNatureAnalysis",
  validateTrademarkName: "ValidateTrademarkName",
  generateSpecification: "GenerateSpecification"
};

// chat message example format
// {
//   id: "323sa680b3249760ea21rt47",
//   text: "Do you ever find yourself falling into the “discount trap?”",
//   time: "2018-02-10T08:45:28.291Z",
//   id: "323sa680b3249760ea21rt47",
//   name: "You",
//   avatar: "/assets/images/faces/13.jpg",
//   status: "online",
//   mood: ""
// }
const createMessage = (speaker, message) => {
  const date = new Date();
  return {
    message: message,
    id: speaker == ROBOT ? ROBOT : CURRENTUSERID,
    avatar: speaker == ROBOT ? ROBOTICON : HUMANICON,
    speaker: speaker,
    createdAt: date.getTime()
  };
};

const apiMessageToStateMessages = (message) => {
  const result = {
    message: message.message,
    id: message.speaker == ROBOT ? ROBOT : CURRENTUSERID,
    avatar: message.speaker == ROBOT ? ROBOTICON : HUMANICON,
    speaker: message.speaker,
    createdAt: message.created_at
  };
  console.log(message);
  console.log(result);
  return result;
};

const stateMessagesToApiMessage = (message) => ({
  speaker: message.speaker,
  message: message.message,
  created_at: message.createdAt,
  id: message.id,
  suggestion: []
});

export default function Chatbox({ togglePopup }) {
  const actionState = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  const [isAlive, setIsAlive] = useState(true);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([
    // createMessage(HUMAN , "I am looking for legal advise."),
    createMessage(
      HUMAN,
      "I'm looking to register a trademark in Hong Kong and need some expert advice.\n\nCould you provide some tips? I want to ensure I'm on the right track before submitting my application."
    ),
    // createMessage(ROBOT, "I am a helpful trademark assistant. You can use the tools we predeined to construct the application form")
    createMessage(
      ROBOT,
      "Hi there! 👋 I'd be happy to help you with registering your trademark™️. \n\nYou can use the tools🛠️ to construct the application form, and we can even generate a ready-to-go application form for filing📝.\n\nPlease click on the icon in the bottom-right corner to get started. \n\nHappy trademark hunting and we are happy to assist, feel free to ask me anything. 😊"
    )
  ]);
  const chatBottomRef = document.querySelector("#chat-scroll");
  const [actionPlate, setActionPlate] = useState(false);
  const [action, setAction] = useState(ACTION.normalChat);
  const toggleActionPlate = () => setActionPlate(!actionPlate);
  const [askingQuestions, setAskingQuestions] = useState(false);

  const getNormalChatResponse = async () => {
    const data = {
      messages: messageList.map((item) => stateMessagesToApiMessage(item))
    };
    console.log(data);
    axios.post("http://172.31.16.20:8000/api/v1/messageRequest", data).then((response) => {
      setMessageList(response.data.result.messages.map((item) => apiMessageToStateMessages(item)));
    });
  };

  const getToolActionResponseWithLastMessage = async (tool_type) => {
    return axios
      .post("http://172.31.16.20:8000/api/v1/actionMessageRequest", {
        actions: [{ type: tool_type, content: messageList[messageList.length - 1].message }]
      })
      .then((response) => {
        response.data.result.actions.map((action) => handleToolResponses(action));
      });
  };

  const handleToolResponses = (action) => {
    console.log(action);
    switch (action.type) {
      case ACTION.businessNatureAnalysis:
        return handleBusinessAnalysisResponse(action);
      case ACTION.validateTrademarkName:
        return handleTrademarkNameValidityCheckResponse(action);
      case ACTION.generateSpecification:
        return handleTrademarkSpecificationResponse(action);
      default:
        throw new Error(action.type + "not implemented");
    }
  };

  const handleTrademarkNameValidityCheckResponse = (action) => {
    console.log(action);
  };

  const handleTrademarkSpecificationResponse = (action) => {
    console.log(action);
  };

  const handleBusinessAnalysisResponse = (action) => {
    console.log(action);
  };

  const Actions = () => {
    const getBusinessAnalysis = () => {
      toggleActionPlate();
      // messageReply("Please enter your business description for business analysis: ");
      messageReply(
        "Good! Let's get started!🐣 To help us provide the best analysis, could you please tell me something about your business💼?"
      );
      setAction(ACTION.businessNatureAnalysis);
    };
    const getTrademarkNameValidity = () => {
      console.log({
        actions: [],
        messages: messageList.map((item) => stateMessagesToApiMessage(item))
      });
      toggleActionPlate();
      // messageReply("Please enter trademark name for checking: ");
      messageReply(
        "Please tell me your trademark name✍️ you are planning to register. \n\nTogether💪, let's take the first step towards safeguarding your brand."
      );
      setAction(ACTION.validateTrademarkName);
    };
    const getTrademarkSpecification = () => {
      toggleActionPlate();
      // messageReply("Please enter business description for generating trademark specification: ");
      messageReply(
        "Please describe your business💼 in more detail to help determine trademark specifications. \n\n⚠️When registering a trademark, specifying the relevant classes of goods and services for which it will be used is essential, as this could help prevent potential trademark infringement in the future. \n\nYour input is crucial—the more information you share, the better we can tailor your trademark specification to fit your needs. 🕵️"
      );
      setAction(ACTION.generateSpecification);
    };
    const getGenerationOfPdfAplicationForm = () => {
      toggleActionPlate();
      // messageReply("Please wait for a minute...");
      messageReply(
        "Great news! We've prepared a PDF Application form 📃for you, automatically filled with all the data from our analysis. It's ready for your review. \n\nSimply press the ✨Generate button at the bottom of the form on the left to download your completed application. Once downloaded, you'll have a ready-to-go filing that's been tailored just for your business. \n\nThank's for placing your trust in us. We hope to serve you again soon. 🤝"
      );
      setAction(ACTION.normalChat);
    };
    return (
      <ButtonGroup
        height="100%"
        width="100%"
        variant="outlined"
        aria-label="Disabled button group"
        orientation="vertical"
      >
        <Button onClick={getBusinessAnalysis}>
          <WorkIcon style={{ marginRight: "8px" }} />
          <span>Understand Your Business</span>
        </Button>
        <Button onClick={getTrademarkNameValidity}>
          <DriveFileRenameOutlineRoundedIcon style={{ marginRight: "8px" }} />
          <span>Validate Trademark Name</span>
        </Button>
        <Button onClick={getTrademarkSpecification}>
          <SummarizeIcon style={{ marginRight: "8px" }} />
          <span>Generate Trademark Specification</span>
        </Button>
        <Button onClick={getGenerationOfPdfAplicationForm}>
          <ApprovalIcon style={{ marginRight: "8px" }} />
          <span>Generate PDF Application Form</span>
        </Button>
      </ButtonGroup>
    );
  };

  const sendMessageOnEnter = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      let tempMessage = message.trim();
      messageSend(tempMessage);
      setAskingQuestions(true);
    }
  };

  useEffect(() => {
    if (askingQuestions) {
      if (action == ACTION.normalChat) {
        getNormalChatResponse();
      } else {
        const param = { actionType: action, messageList: messageList };
        console.log(param);
        dispatch(fetchAction(param));
        messageReply("We are generating the result. Please wait for 3-5 minute...");
      }
      console.log(actionState);
      setAction(ACTION.normalChat);
      setAskingQuestions(false);
    }
  }, [messageList]);

  const messageReply = async (replyText) => {
    setTimeout(() => {
      console.log(messageList);
      setMessageList([...messageList, createMessage(ROBOT, replyText)]);
      setMessage("");
      scrollToBottom();
    }, 1000);
  };

  const messageSend = (sendMessage) => {
    setMessageList([...messageList, createMessage(HUMAN, sendMessage)]);
    setMessage("");
    scrollToBottom();
  };

  const scrollToBottom = useCallback(() => {
    if (chatBottomRef) {
      chatBottomRef.scrollTo({
        top: chatBottomRef.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [chatBottomRef]);

  const { palette } = useTheme();
  const primary = palette.primary.main;
  const textPrimary = palette.text.primary;

  return (
    <ChatContainer>
      <ProfileBox>
        <Box display="flex" alignItems="center">
          <ChatAvatar src="/assets/images/robot-4.png" status="online" />
          <ChatStatus>
            <H5 style={{ color: "#34314c" }}>Your AI Trademark Lawyer</H5>
            <Span>Active</Span>
          </ChatStatus>
        </Box>
      </ProfileBox>

      <StyledScrollBar id="chat-scroll">
        {messageList.map((item, ind) => (
          //  <Chat item={item} currentUserId={CURRENTUSERID} key={ind} primary={primary}/>
          <Chat item={item} currentUserId={CURRENTUSERID} key={ind} primary={textPrimary} />
        ))}
      </StyledScrollBar>

      <div>
        <Divider sx={{ background: `rgba(${convertHexToRGB(textPrimary)}, 0.15)` }} />
        {actionPlate && <Actions />}

        <TextField
          multiline
          fullWidth
          rowsmax={4}
          value={message}
          // placeholder="Type here ..."
          placeholder="Your journey starts here"
          // placeholder="Talk to trademark advisory bot"
          onKeyUp={sendMessageOnEnter}
          onChange={(e) => setMessage(e.target.value)}
          // sx={{ "& textarea": { color: primary } }}
          sx={{ "& textarea": { color: textPrimary } }}
          InputProps={{
            endAdornment: (
              <Box display="flex">
                <IconButton size="small" onClick={toggleActionPlate}>
                  {/* <Construction style={{ color: '#34314C' }}/> */}
                  <RocketLaunchIcon style={{ color: "#34314C" }} />
                </IconButton>
              </Box>
            ),
            classes: { root: "pl-5 pr-3 py-3 text-body" }
          }}
        />
      </div>
    </ChatContainer>
  );
}
