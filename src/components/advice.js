import React,{useState,useEffect} from 'react';
import dice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-desktop.svg';
import mobileDivider from '../images/pattern-divider-mobile.svg';

const FetchAdvice = (props) => {

	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [slip, setSlip] = useState([]);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setSlip(data.slip);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [props.id])

	if (error) {
        return( 
	        <div>
	        	<h1>Error {error.message.type}</h1>
	        	<p>Error: {error.message}</p>
	        </div>
	        )
    } else if (!isLoaded) {
        return ( 
	        <div>
	        	<h1>Loading</h1>
	        	<Loader />
	        </div>
	        );
    } else {
        return (
        	<div className="quote">
	        	<h1>Advice {'#' + slip.id}</h1>
	            <p key={slip.id}>"{slip.advice}"</p>
            </div>
        );
    }

}

//pure CSS animation from https://codepen.io/sudeepgumaste/pen/abdrorB
const Loader = () => {
	return(
		<div className="loading-box">
		  <div className="loading-container">
		    <span className="circle"></span>
		    <span className="circle"></span>
		    <span className="circle"></span>
		    <span className="circle"></span>
		  </div>
		</div>
	)
}

const Advice = () => {

	const [id, setID] = useState(0);
	const [clicked, setClicked] = useState('');
	const [newQuote, setNewQuote] = useState('');
	const [preventClass, setPreventClass] = useState('');

	function handleClick(){
		setID(Math.floor(Math.random() * 20));
		setClicked(' clicked');
		setNewQuote(' new-quote');
		setPreventClass(' no-click');

		setTimeout(function(){
				//setPreventClick(false);
				setPreventClass('');
		}, 2000);

		setTimeout(function(){
			setClicked('');
			setNewQuote('');
		}, 1000);
	}

	return(
		<div className={'wrapper' + newQuote}>
				<div className="loader-wrapper">
					<div className="loader noselect"></div>
				</div>
			<div className={'advice-wrapper' + newQuote}>
				<FetchAdvice id={id} />
				<div className="divider noselect">
					<img src={mobileDivider} srcSet={`${mobileDivider} 550w, ${divider} 1920w`}  sizes="(max-width: 600px) 550px,
            1920px" alt=""/>
				</div>
			</div>
			<div onClick={handleClick} className={'random-quote-button noselect' + clicked + preventClass}>
				<img src={dice} alt="Random Quote" />
			</div>
		</div>
	)
}

export default Advice;