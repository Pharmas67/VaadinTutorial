import { EndpointRequestInit as EndpointRequestInit_1, Subscription as Subscription_1 } from "@vaadin/hilla-frontend";
import type Channel_1 from "./com/example/application/chat/Channel.js";
import type Message_1 from "./com/example/application/chat/Message.js";
import client_1 from "./connect-client.default.js";
async function channel_1(channelId: string, init?: EndpointRequestInit_1): Promise<Channel_1 | undefined> { return client_1.call("ChatService", "channel", { channelId }, init); }
async function channels_1(init?: EndpointRequestInit_1): Promise<Array<Channel_1>> { return client_1.call("ChatService", "channels", {}, init); }
async function createChannel_1(name: string, init?: EndpointRequestInit_1): Promise<Channel_1> { return client_1.call("ChatService", "createChannel", { name }, init); }
function liveMessages_1(channelId: string): Subscription_1<Array<Message_1>> { return client_1.subscribe("ChatService", "liveMessages", { channelId }); }
async function messageHistory_1(channelId: string, fetchMax: number, lastSeenMessageId: string | undefined, init?: EndpointRequestInit_1): Promise<Array<Message_1>> { return client_1.call("ChatService", "messageHistory", { channelId, fetchMax, lastSeenMessageId }, init); }
async function postMessage_1(channelId: string, message: string, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("ChatService", "postMessage", { channelId, message }, init); }
export { channel_1 as channel, channels_1 as channels, createChannel_1 as createChannel, liveMessages_1 as liveMessages, messageHistory_1 as messageHistory, postMessage_1 as postMessage };
