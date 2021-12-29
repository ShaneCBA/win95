import TextEditor from "./Components/Window/Applications/TextEditor";

const APPS = [
    {
        title: "Roberts World",
        content: <div><b>Robert</b> always <i>wins</i></div>,
        icon: "user_world-1"
    },
    {
        title: "Hello World",
        content: "simple window app",
        icon: "search_web-0"
    },
    {
        title: "Text Editor",
        content: <TextEditor fileId="0"></TextEditor>,
        icon: "search_web-0"
    }
]

export default APPS;