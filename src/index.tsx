import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";

/*
const NavContainer = (props: NavProp): JSX.Element => {
    const [msgList] = useState(new MessageList(new Array<Message>()));
    const [unreadCount, setUnreadCount] = useState(msgList.list.filter((item: Message) => (item.unread)).length);
    const [formDisplay, setFormDisplay] = useState(props.displayForm);


    const addMsgToList = useCallback((title: string, body: string): void => {
        msgList.list.push(new Message(title, body, true));
    }, []);

    const updateCount = useCallback(() => {
        setUnreadCount(msgList.list.filter((item: Message) => (item.unread)).length)
    }, []);

    const switchToMessages = useCallback(() => {
        setFormDisplay(false);
        updateCount();
    }, []);


    return (
        <>
            <div>
                <button id="formBtn" onClick={(): void => {
                    setFormDisplay(true);
                }}>Add new Message
                </button>
                <button id="msgBtn" onClick={(): void => {
                    setFormDisplay(false);
                }}>Messages ({unreadCount <= 5 ? unreadCount : "5+"} new Messages)
                </button>
            </div>
            {!formDisplay && <div>
                <MessageArea messages={msgList} updateCount={updateCount}/>
            </div>}
            <div>
                {formDisplay && <div>
                    <FormArea addToList={addMsgToList} switchToMessages={switchToMessages} updateCount={updateCount}/>
                </div>
                }
            </div>
        </>
    )
};
*/
/*
const MessageArea = (props: MsgProp): JSX.Element => {
    const [mList] = useState(props.messages);
    const unreadCount: number = mList.list.filter((item: Message) => (item.unread)).length;
    const markAsRead = (item: Message): void => {
        item.unread = false;
        props.updateCount();
    };

    return (
        <> <h1>Messages</h1>
            {unreadCount > 0 && <div style={{color: 'red'}}>
                You have {unreadCount} unread Messages!
            </div>}
            <ul>
                {mList.list.map((item: Message) => <li onClick={(): void => markAsRead(item)}
                                              style={item.unread ? {backgroundColor: 'blue'} : {backgroundColor: 'white'}}
                                              key={item.id}>{item.title}<br/>{item.body}<br/><br/></li>)}
                <br/>
            </ul>
        </>
    )
};
*/
/*
const FormArea = (props: FormProp): JSX.Element => {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [formProp] = useState(props);

    function submitForm(e: FormEvent): void {
        e.preventDefault();
        formProp.addToList(name.toString(), value.toString());
        formProp.switchToMessages();
    }

    return (
        <>
            <h1>Add new Message</h1>
            <form onSubmit={submitForm}>
                <label>Title:
                    <input type="text" name={name} id="titlefield"
                           onChange={(e: ChangeEvent): void => setName((e.target as HTMLInputElement).value)}/>
                    <br/>
                </label>
                <label>Message:
                    <input type="text" value={value} id="msgField"
                           onChange={(e: ChangeEvent): void => setValue((e.target as HTMLInputElement).value)}/>
                </label>
                <button>Add message!</button>
            </form>

        </>
    )
};
*/
/*
type MsgProp = {
    messages: MessageList;
    updateCount: Function;
}

type NavProp = {
    displayForm: boolean;
}

NavContainer.propTypes = {
    displayForm: bool.isRequired
};

MessageArea.propTypes = {
    messages: MessageList,
    updateCount: func.isRequired
};
*/
/*
type FormProp = {
    addToList: Function;
    switchToMessages: Function;
    updateCount: Function;

}

 */
/*
FormArea.propTypes = {
    addToList: func.isRequired,
    switchToMessages: func.isRequired,
    updateCount: func.isRequired
};
*/
/*
const App = (): JSX.Element => {
    return (
        <>
            <NavContainer displayForm={true}/>
        </>
    )
};
*/
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;