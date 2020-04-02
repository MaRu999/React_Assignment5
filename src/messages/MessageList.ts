import Message from "./Message";

export default class MessageList {

    list: Array<Message> = new Array<Message>();

    constructor(list: Array<Message>) {
        this.list = list;
    }
}