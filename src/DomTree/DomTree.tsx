import React, { FC } from "react";
import "./DomTree.css";

const NodeTypes = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
}

type Props = {
    node: Node;
}

const renderNodeByType = (node: ChildNode) => {
    switch (node.nodeType) {
        case NodeTypes.TEXT_NODE:
            return <div className="TextNode">{node.nodeValue}</div>;
        case NodeTypes.CDATA_SECTION_NODE:
            return <div className="CDataNode">
                <code>!CDATA:</code>
                {node.nodeValue}
            </div>;
        case NodeTypes.COMMENT_NODE:
            return <div className="CommentNode">{node.nodeValue}</div>;
        // case NodeTypes.ATTRIBUTE_NODE:
        //     return <div className="CommentNode">{node.nodeValue}</div>;
        default:
            return <DomTree node={node} />;
    }
}

const renderNodeAttributes = (el: Element) => {
    return <div className="attributes">
        {el.getAttributeNames().map(attrName =>
            <dl>
                <dt>{attrName}</dt>
                <dd>{el.getAttribute(attrName)}</dd>
            </dl>
        )}
    </div>;

}

export const DomTree: FC<Props> = ({ node }) => {
    const meaningfullChildNodes = Array.from(node.childNodes).filter(subNode => {
        if (subNode.nodeType === NodeTypes.TEXT_NODE) {
            if (!subNode.nodeValue || (subNode.nodeValue.trim && !subNode.nodeValue.trim())) {
                return false;
            } else {
                console.log(`subNode.nodeValue ="${subNode.nodeValue}"`);
            }
        }
        return true;
    });

    return (
        <div className="domTree-node">
            &lt;{node.nodeName}
            {node.nodeType === NodeTypes.ELEMENT_NODE ? renderNodeAttributes(node as Element) : null}&gt;

            {node.nodeType !== NodeTypes.TEXT_NODE && node.textContent && node.textContent.trim() ?
                // a little syntactic hack to have console.log inside rendering
                (console.log('non-text node has textContent!!!!!!!!!!!!!!!!', node, `textContent="${node.textContent}"`),
                    <div className="domTree-nodeProps">
                        <dt>textContent</dt>
                        <dd>{node.textContent}</dd>
                    </div>)
                : null
            }

            <ol className="domTree-childNodes">
                {meaningfullChildNodes.map(subNode => (
                    <li className="domTree-childNodes-node">
                        {renderNodeByType(subNode)}
                    </li>
                ))}
            </ol>
            &lt;/{node.nodeName}&gt;
        </div>
    )
}