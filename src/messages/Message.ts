export default class Message {
    id: string;
    title: string;
    body: string;
    unread: boolean;

    constructor(title: string, body: string, unread: boolean) {
        this.id = this.getUuidv4();
        this.title = title;
        this.body = body;
        this.unread = unread;
    }

    //taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript, for generating unique identifier
    //NO GUARANTEES, but low change of collision
    //replace with open source framework for uuid generation in application that will see release (not necessary/allowed for assignment)
    getUuidv4(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}