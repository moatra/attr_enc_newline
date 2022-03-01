export const get = () => {
    return {
        status: 200,
        body: {
            multi_line: JSON.parse(`"Hey, there's one line!\\r\\nNo, there's two lines!"`)
        }
    }
}

export const post = async (event) => {
    let form = await event.request.formData();
    return {
        status: 200,
        body: {
            post_result: form.get("hidden_value")
        }
    }
}