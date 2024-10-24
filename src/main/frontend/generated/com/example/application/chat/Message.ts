interface Message {
    messageId: string;
    channelId: string;
    sequenceNumber: number;
    timestamp: string;
    author: string;
    message: string;
}
export default Message;
