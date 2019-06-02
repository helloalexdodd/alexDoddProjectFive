import React, {Component} from "react";

class Body extends Component {
	render() {
		return (
			<div className="bodyText">
				<p>
					Histamine is a chemical in the body that performs a variety of functions. It
					acts as a neurotransmitter, delivering messages to the brain; it acts as a
					trigger for the release of stomach acid to aid in digestion; and it releases
					after injury or allergic reaction as a part of your body's natural immune
					response. In a typical allergic reaction, it is the release of histamine
					that provokes what we think of as an allergic reaction.
				</p>
				<p>
					People with <span>Histamine Intolerance</span> typically lack one or both
					the enzymes - diamine oxidase (DAO) and histamine-N-methyltransferase (HNMT)
					- for the breakdown of histamine in the body, leading to the buildup of
					histamine over time, and the allergic response-type symptoms that follow.
					Ingestion of histamine rich foods that release histamine or block DAO enzyme
					are the main cause of symptoms for people with{" "}
					<span>Histamine Intolerance</span>.
				</p>
				<p>
					This database is designed to help those with{" "}
					<span>Histamine Intolerance</span> by providing a quick and simple search
					tool to access information on a variety of foods and how they might affect
					symptoms.{" "}
				</p>
			</div>
		);
	};
};

export default Body
