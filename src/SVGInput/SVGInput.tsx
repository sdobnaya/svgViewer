import React, { FC, FormEventHandler, ReactEventHandler, useRef } from "react";

type Props = {
    svg: string | undefined;
    setSvg: (newSvg: string) => void;
}

export const SVGInput: FC<Props> = ({ svg = '', setSvg }) => {
    // const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
        console.log({ event });

        //TODO improve typing. Why is there error here? (without typecasting ".. as ..")
        setSvg((event.target as HTMLTextAreaElement).value)
    }

    return (
        <div className="SVGInput">
            <textarea
                // ref={inputRef} 
                onInput={handleInput}
                rows={5} cols={50}
                value={svg}
            ></textarea>
        </div>
    )
}