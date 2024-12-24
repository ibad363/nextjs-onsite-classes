export default {
    name: "pets",
    title: "Pets",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type:"string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
}