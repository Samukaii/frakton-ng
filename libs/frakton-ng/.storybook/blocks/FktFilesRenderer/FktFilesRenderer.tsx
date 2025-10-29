import {Source, useOf} from "@storybook/addon-docs/blocks";
import {useState} from "react";
import {ModuleExport} from "storybook/internal/types";
import {generateAutoSource} from "../../utils/GenerateAutoSource";
import {toKebabCase} from "../../utils";
import {If} from "../../utils/If";
import './FktFilesRenderer.css';

type FktFilesRenderer = {
	code?: string | {
		name: string;
		files: {
			name: string;
			content: string;
			language: 'typescript' | 'css' | 'html'
		}[]
	};
	of: ModuleExport;
};

export const FilesSource = (props: FktFilesRenderer) => {
	const resolvedOf = useOf(props.of || 'story', ['story', 'meta']);
	const [copied, setCopied] = useState(false);

	if (resolvedOf.type !== "story")
		throw new Error(`"of" property must be a valid story`);

	const [tab, setTab] = useState(0);

	let files: {
		name: string;
		content: string;
		language: 'typescript' | 'css' | 'html'
	}[];


	if (!props.code) {
		const autoSource = generateAutoSource(props.of);

		files = [
			{
				name: `fkt-${toKebabCase(resolvedOf.story.name)}-component.html`,
				content: autoSource.html,
				language: 'html'
			},
			{
				name: `fkt-${toKebabCase(resolvedOf.story.name)}-component.ts`,
				content: autoSource.ts,
				language: 'typescript'
			},
		]
	} else if (typeof props.code === 'string') {
		files = [
			{
				name: `fkt-${toKebabCase(resolvedOf.story.name)}-component.ts`,
				content: props.code,
				language: 'typescript'
			}
		];
	} else {
		files = props.code.files.filter(file => !!file.content);
	}

	const copy = async () => {
		setCopied(true);
		const file = files[tab];

		await navigator.clipboard.writeText(file.content);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}

	return (
		<div className="files-source source-application-code">
			<div className="files-source__tabs">
				{files?.map((file, index) => {
					return (

						<button
							className={tab === index ? 'active' : ''}
							onClick={() => setTab(index)}
						>
							<If condition={file.language === "html"}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
									<path fill="#F4BF75" data-iconColor="HTML"
										  d="M11.631,5.1l0.136-1.531H4.233l0.4,4.672H9.849l-0.187,2L7.983,10.7l-1.67-.464L6.2,9.015H4.71L4.9,11.448l3.085,0.875H8.017V12.314l3.06-.866L11.5,6.688H6.014L5.886,5.1h5.744ZM2,1H14L12.909,13.583,7.983,15,3.091,13.583Z"/>
								</svg>
							</If>
							<If condition={file.language === "typescript"}>
								<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
									 stroke-miterlimit="1.414" version="1.1"
									 viewBox="0 0 500 500" width="16px" height="16px"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="m46 46v408h408v-408h-408zm310.02 198.17v.00586c3.9124.01226 8.3586.21357 11.703.57617 13.619 1.4734 24.225 7.349 33.248 18.416 4.4934 5.5129 6.0307 7.9253 5.7031 8.957-.21108.66564-3.294 2.874-13.096 9.3809-9.6287 6.3921-12.731 8.3066-13.451 8.3066-.73045 0-2.2517-1.5657-4.4453-4.5723-4.2244-5.7892-8.5373-8.4314-15.205-9.3125-7.1704-.9496-13.602 1.3105-16.752 5.8887-2.6923 3.9112-3.099 10.206-.95899 14.779 2.4792 5.2976 6.9671 8.2262 24.166 15.768 19.836 8.6975 29.888 14.651 37.209 22.039 7.8838 7.9563 11.878 17.143 13.105 30.137.59907 6.3332-.13284 13.84-1.9453 19.943-4.4447 14.961-16.439 25.916-34.02 31.072-4.8597 1.4248-9.3818 2.276-13.855 2.6035-6.8282.50274-16.603.22572-22.486-.63086-14.884-2.1677-31.686-10.829-40.064-20.65-4.1128-4.8205-9.3633-12.754-9.3633-14.15 0-.67351.33372-1.0557 1.6562-1.8965 3.9213-2.4911 26.394-15.338 26.83-15.338.26345 0 1.4373 1.3838 2.6074 3.0742 2.6512 3.8278 9.17 10.407 12.484 12.602 2.7074 1.7928 6.1691 3.2327 10.279 4.2715 2.3539.5868 3.6002.69141 8.7363.69141 5.2475-.00176 6.3243-.0901 8.6719-.72071 6.2096-1.6713 11.057-5.1293 13.111-9.3535.90039-1.8254.91797-2.0533.91797-6.4805v-4.5898l-1.1035-2.1894c-2.6734-5.3067-8.4338-8.9474-26.645-16.836-8.3655-3.6237-18.611-8.733-22.611-11.275-9.1282-5.801-15.455-12.433-19.607-20.551-4.13-8.073-4.7459-11.078-4.7559-23.217-.01017-9.5024-.02592-9.3858 1.9414-15.451 1.785-5.5038 5.439-11.652 9.4727-15.939 8.0511-8.5582 19.813-14.058 32.406-15.152 1.6108-.15244 3.768-.21208 6.1152-.20508zm-108.36 1.877h.00391c24.253.01227 38.156.0962 38.379.23633.42036.2603.47265 2.3708.47265 15.842v15.541l-24.201.08789-24.201.08789v68.713c0 37.793-.07654 68.938-.18164 69.213-.17115.46249-2.0325.49805-17.779.49805h-17.588l-.18164-.71094c-.11745-.39011-.20308-31.536-.20508-69.213l-.00586-68.504-24.201-.08594-24.201-.08789v-15.357c0-12.18.08414-15.442.4082-15.766.333-.34334 12.684-.43187 65.902-.48437 10.261-.01034 19.495-.01477 27.58-.00977z"
										fill="#0288d1" data-iconColor="TypeScript"/>
								</svg>
							</If>
							<If condition={file.language === "css"}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
									<path fill="#F03D70" data-iconColor="SCSS"
										  d="M13.926,2.713C13.5,1.068,10.709.527,8.07,1.444A13.334,13.334,0,0,0,3.577,3.965c-1.453,1.33-1.685,2.487-1.59,2.971C2.325,8.642,4.715,9.757,5.7,10.585v0c-0.29.139-2.41,1.189-2.907,2.263a1.449,1.449,0,0,0,.485,2.054,3.008,3.008,0,0,0,3.21-1.273,3.13,3.13,0,0,0,.32-2.836,3.9,3.9,0,0,1,1.449-.081c1.661,0.19,1.987,1.2,1.924,1.629a1.074,1.074,0,0,1-.527.728c-0.116.071-.152,0.095-0.142,0.147,0.014,0.076.068,0.073,0.167,0.057a1.276,1.276,0,0,0,.9-1.129c0.04-.995-0.935-2.108-2.661-2.079a4.649,4.649,0,0,0-1.481.2l-0.073-.079C5.3,9.073,3.326,8.285,3.41,6.788c0.03-.544.224-1.977,3.79-3.715,2.921-1.424,5.26-1.032,5.664-.164,0.577,1.241-1.25,3.547-4.284,3.879a2.313,2.313,0,0,1-1.916-.475c-0.159-.172-0.183-0.18-0.243-0.147-0.1.053-.035,0.2,0,0.295a1.789,1.789,0,0,0,1.1.843,5.932,5.932,0,0,0,3.556-.344C12.912,6.265,14.348,4.33,13.926,2.713Zm-7.82,8.382a2.322,2.322,0,0,1-.02,1.384q-0.024.07-.052,0.139t-0.061.135a2.586,2.586,0,0,1-.437.624A1.665,1.665,0,0,1,3.887,14c-0.356-.2-0.178-1.03.46-1.689A6.417,6.417,0,0,1,6.02,11.144v0Z"
									/>
								</svg>
							</If>

							<p>
								{file.name}
							</p>
						</button>
					)
				})}
			</div>

			{files?.map((file, index) => {
				if (index !== tab) return;

				return (
					<div className="files-source__code">
						<Source code={file.content} language={file.language}/>

						<button
							onClick={() => {copy()}}
							className={"files-source__button" + (copied ? " files-source__button--copied" : "")}
						>
							<span className="frakton-icon">
								{copied ? "": ""}

							</span>
							<p>
								{copied ? "Copied" : "Copy"}
							</p>
						</button>
					</div>
				)
			})}
		</div>
	)
}
