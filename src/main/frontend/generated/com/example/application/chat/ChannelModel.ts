import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Channel_1 from "./Channel.js";
import MessageModel_1 from "./MessageModel.js";
class ChannelModel<T extends Channel_1 = Channel_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(ChannelModel);
    get id(): StringModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get lastMessage(): MessageModel_1 {
        return this[_getPropertyModel_1]("lastMessage", (parent, key) => new MessageModel_1(parent, key, true));
    }
}
export default ChannelModel;
