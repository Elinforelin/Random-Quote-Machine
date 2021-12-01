import classes from "./quoteBox.module.css";
import { ReactComponent as SvgIcon } from "../assets/icons/iconTwitter.svg";

const Buttons = ({ color, changeTheQuote }) => {
	return (
		<div>
			<a
				href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%20didn%E2%80%99t%20fail%20the%20test.%20I%20just%20found%20100%20ways%20to%20do%20it%20wrong.%22%20Benjamin%20Franklin"
				target="_blank"
			>
				<SvgIcon className={classes.twitterImg} />
			</a>
			<button style={{ backgroundColor: color }} onClick={changeTheQuote}>
				New quote
			</button>
		</div>
	);
};

export default Buttons;
