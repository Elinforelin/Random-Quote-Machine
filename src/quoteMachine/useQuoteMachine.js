import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../data/constants";
import { changeColorAction } from "../store/colorReduser";


export const useQuoteMachine = () => {
  const quotes = useSelector((state) => state.dataReduser.quotes);
  const color = useSelector((state) => state.colorReduser.color);
  const dispatch = useDispatch();
  const [currentQuotes, setCurrentQuotes] = useState({});

  const changeTheQuote = () => {
    let colorIndex = Math.floor(Math.random() * 12);
    let i = Math.floor(Math.random() * quotes.length);
    dispatch(changeColorAction(colors[colorIndex]));
    return setCurrentQuotes(quotes[i]);
  };

  useEffect(() => {
    if (quotes.length) {
      changeTheQuote();
    }
  }, [quotes]);
  return {
    color,
    currentQuotes,
    changeTheQuote
  }
}