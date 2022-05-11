import React from "react";

function BigSection(props) {
  return (
    <div>
      <div className="space"></div>
      <div className="content-big-section">
        <h1>{props.title}</h1>
        <p>
          XAI stands for eXplainable Artificial Intelligence, and it is a fastly
          expanding field with great potential impact on our society.
        </p>
        <p>
          AI methods are achieving unprecedented levels of performance when
          learning to solve increasingly complex computational tasks, making
          them a big driver for the future development of the human society.
        </p>
        <p>
          In the recent decade, there has been a rise of decision systems such
          as Deep Neural Networks that are opaque and considered "black box"
          models. When decisions derived from such systems ultimately affect
          humans’ lives (like in medicine, law, policing, or defense), there is
          an emerging need for understanding how such decisions are made by AI
          The danger is when we use decisions made by AI that are not
          justifiable, legitimate, or do not allow us to see detailed
          explanations of why.
        </p>
        <p>
          Further, there is a gap between the research community and business
          sectors - lack of adoption of some AI solutions in highly regulated
          industries like finance, security, and health, because people are
          reluctant to adopt techniques that are not directly interpretable and
          trustworthy.
        </p>
      </div>
    </div>
  );
}

export default BigSection;
