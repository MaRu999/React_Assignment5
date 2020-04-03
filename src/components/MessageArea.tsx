import * as React from 'react';
import {useState} from 'react';
import {func} from "prop-types";
import Message from "../messages/Message";
import MessageList from "../messages/MessageList";
import {Div, RedBanner, StyledArticle, StyledHeading} from "./styledComponents";


export const MessageArea = (props: MsgProp): JSX.Element => {
    const [mList] = useState(props.messages);
    const unreadCount: number = mList.list.filter((item: Message) => (item.unread)).length;
    const markAsRead = (item: Message): void => {
        item.unread = false;
        props.updateCount();
    };

    return (
        <Div> <StyledHeading>Messages</StyledHeading>
            {unreadCount > 0 && <RedBanner>
                You have {unreadCount} unread Messages!
            </RedBanner>}
                {mList.list.map((item: Message) => <StyledArticle unread={item.unread} onClick={(): void => markAsRead(item)}
                                                       key={item.id}>{item.title}<br/>{item.body}<br/></StyledArticle>)}
        </Div>
    )
};

MessageArea.propTypes = {
    messages: MessageList,
    updateCount: func.isRequired
};

type MsgProp = {
    messages: MessageList;
    updateCount: Function;
}