import classes from "./quoteBox.module.css";

const Quote = ({ currentQuotes }) => {
	return (
		<div>
			<div className={classes.text}>{currentQuotes.text}</div>
			{currentQuotes.author && (
				<div className={classes.author}>
					{"-"}
					{currentQuotes.author}
				</div>
			)}
		</div>
	);
};

export default Quote;
