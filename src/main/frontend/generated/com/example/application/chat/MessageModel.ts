import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Message_1 from "./Message.js";
class MessageModel<T extends Message_1 = Message_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(MessageModel);
    get messageId(): StringModel_1 {
        return this[_getPropertyModel_1]("messageId", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get channelId(): StringModel_1 {
        return this[_getPropertyModel_1]("channelId", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get sequenceNumber(): NumberModel_1 {
        return this[_getPropertyModel_1]("sequenceNumber", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get timestamp(): StringModel_1 {
        return this[_getPropertyModel_1]("timestamp", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.time.Instant" } }));
    }
    get author(): StringModel_1 {
        return this[_getPropertyModel_1]("author", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get message(): StringModel_1 {
        return this[_getPropertyModel_1]("message", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
}
export default MessageModel;
