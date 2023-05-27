
import { getDomTreeFromXmlString } from './getDomTreeFromXmlString'


describe('getDomTreeFromXmlString', () => {
    it('returns expected document object from sample svg string', () => {
        const svgString = '<circle cx="50" cy="50" r="50"/>';

        const document = getDomTreeFromXmlString(svgString);

        expect((document as Document).nodeName).toBe('#document');
    });

    it('returns Error object for "broken svg" string', () => {
        const svgString = '<circle cx="50" cy="50" r="50';

        expect(() => getDomTreeFromXmlString(svgString)).toThrow();
    })
});