import {CodeOrSourceMdx} from "@storybook/addon-docs/blocks";
import {PropsWithChildren, useState} from "react";
import {If} from "../../../utils/If";
import './FktCode.css';

export const FktCode = (props: PropsWithChildren<{ className: string }>) => {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		setCopied(true);
		const file = props.children;

		await navigator.clipboard.writeText(file as any);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}

	const inlineCode = !props.className;

	return <div className={"source-application-code" + (inlineCode ? " source-application-code--inline" : "")}><CodeOrSourceMdx {...props}/>
		<If condition={!inlineCode}>
			<button
				onClick={() => {copy()}}
				className={"source-application-code__button" + (copied ? " source-application-code__button--copied" : "")}
			>
							<span className="frakton-icon">
								{copied ? "": ""}

							</span>
				<p>
					{copied ? "Copied" : "Copy"}
				</p>
			</button>
		</If>
	</div>
}
