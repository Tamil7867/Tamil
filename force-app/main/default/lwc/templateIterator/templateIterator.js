import { LightningElement } from 'lwc';

export default class TemplateIterator extends LightningElement {
    conceptsObjArray=[
        {
            Id:1,
            Name : "Reactivity",
            courseName: "@track"
        },
        {
            Id:2,
            Name : "Parent-Child Communication",
            courseName:"@api"
        },
        {
            Id:3,
            Name : "Child-Parent Communication",
            courseName:"custom dispatchEvent"
        },
        {
            Id:4,
            Name : "Lifecycle Hooks",
            courseName:"Constructor ConnectedCallback renderedCallback render disconnectedCallback errorCallback"
        },
        {
            Id:5,
            Name : "Lightnining Data Service(LDS)",
            courseName:"@wire"
        }

    ]
}