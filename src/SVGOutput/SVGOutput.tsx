import React, { FC, FormEventHandler, ReactEventHandler, useRef } from "react";
import './SVGOutput.css'

type Props = {
    svg: string | undefined;
}

export const SVGOutput: FC<Props> = ({ svg = '' }) => (
    <div className="SVGOutput">
        <iframe sandbox='' srcDoc={svg}></iframe>
    </div>
)
