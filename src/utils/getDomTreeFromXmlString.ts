export const getDomTreeFromXmlString = (xmlString: string) => {
    const parser = new DOMParser();

    // const svgString = '<circle cx="50" cy="50" r="50"/>';
    const document = parser.parseFromString(xmlString, "image/svg+xml");

    const errorNode = document.querySelector("parsererror");
    if (errorNode) {
        // parsing failed
        // TODO: think over it, what to return or what to do in case of error. Should we throw an exception here?
        throw new SyntaxError(errorNode.textContent || undefined);
    }
    // parsing succeeded
    return document;
}