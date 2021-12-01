import classes from "./QuoteMachine.module.css";
import Quote from "./../components/Quote";
import Buttons from "./../components/Buttons";
import { useQuoteMachine } from "./useQuoteMachine";

const QuoteMachine = () => {
	const { color, currentQuotes, changeTheQuote } = useQuoteMachine();

	return (
		<div
			className={classes.wrapper}
			style={{ backgroundColor: color, color: color }}
		>
			<div className={classes.quoteBox}>
				<Quote currentQuotes={currentQuotes} />
				<div className={classes.btn}>
					<Buttons color={color} changeTheQuote={changeTheQuote} />
				</div>
			</div>
		</div>
	);
};

export default QuoteMachine;
