import * as React from 'react';
import {useState} from 'react';
import {useCallback} from 'react';
import {bool, string} from "prop-types";
import Message from "../messages/Message";
import MessageList from "../messages/MessageList";
import {FormArea} from "./FormArea";
import {MessageArea} from "./MessageArea";
import {Div, StyledNavBtn} from "./styledComponents";

export const NavContainer = (props: NavProp): JSX.Element => {
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
            <Div>
                <StyledNavBtn id="formBtn" onClick={(): void => {
                    setFormDisplay(true);
                }}>Add new Message
                </StyledNavBtn>
                <StyledNavBtn id="msgBtn" onClick={(): void => {
                    setFormDisplay(false);
                }}>Messages ({unreadCount <= 5 ? unreadCount : "5+"} new Messages)
                </StyledNavBtn>
            </Div>
            {!formDisplay && <Div>
                <MessageArea themeName={props.themeName} messages={msgList} updateCount={updateCount}/>
            </Div>}
            <Div>
                {formDisplay && <Div>
                    <FormArea addToList={addMsgToList} switchToMessages={switchToMessages} updateCount={updateCount}/>
                </Div>
                }
            </Div>
        </>
    )
};

type NavProp = {
    displayForm: boolean;
    themeName: string;
}

NavContainer.propTypes = {
    displayForm: bool.isRequired,
    themeName: string.isRequired
};