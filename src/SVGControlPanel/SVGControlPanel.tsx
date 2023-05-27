import React, { FC, FormEventHandler, ReactEventHandler, useCallback, useMemo, useRef } from "react";
import { getDomTreeFromXmlString } from "../utils/getDomTreeFromXmlString";
import { DomTree } from "../DomTree/DomTree";

type Props = {
    code: string | undefined;
    setCode: (newSvg: string) => void;
}

/**
 * Takes svg/xml code and shows it as _interactive_ DOM tree - with changeable attributes, etc.
 */
export const SVGControlPanel: FC<Props> = ({ code = '', setCode }) => {
    // const inputRef = useRef<HTMLTextAreaElement>(null);

    // const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
    //     console.log({ event });

    //     //TODO improve typing. Why is there error here? (without typecasting ".. as ..")
    //     setCode((event.target as HTMLTextAreaElement).value)
    // }

    const dom = useMemo(() => {
        try {
            return code ? getDomTreeFromXmlString(code) : null;
        } catch (e) {
            // TODO: deside what to do here. Because console.log is bad when user types code into the textarea (the code is million times erroneous before getting correct)
            // console.log(e);
        }
    }, [code]);

    return (
        <div className="SVGControlPanel">
            It's already parsed, but we render it as text for now

            {dom ? <DomTree node={dom} /> : 'Input some XML/SVG code'}
        </div>
    )
}