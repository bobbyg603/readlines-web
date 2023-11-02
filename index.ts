export async function* makeTextFileLineIterator(file: Blob) {
    let value: Uint8Array | undefined;
    let done: boolean;

    const utf8Decoder = new TextDecoder("utf-8");
    const reader = file.stream().getReader();
    ({ value, done } = await reader.read());
    let chunk = value ? utf8Decoder.decode(value, { stream: true }) : "";

    const re = /\r\n|\n|\r/gm;
    let startIndex = 0;

    for (; ;) {
        const result = re.exec(chunk);
        if (!result) {
            if (done) {
                break;
            }
            let remainder = chunk.substring(startIndex);
            ({ value, done } = await reader.read());
            chunk =
                remainder + (value ? utf8Decoder.decode(value, { stream: true }) : "");
            startIndex = re.lastIndex = 0;
            continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
    }
    if (startIndex < chunk.length) {
        // last line didn't end in a newline char
        yield chunk.substring(startIndex);
    }
}
