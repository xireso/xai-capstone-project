// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import {
  MDBScrollspy,
  MDBScrollspyNavItem,
  MDBScrollspySection,
  MDBScrollspyNavLink,
  MDBScrollspyNavList,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import Section from "./components/Section";
import Subsection from "./components/Subsection";
import BigSection from "./components/BigSection";
import ShapTheorySection from "./components/ShapTheorySection";
import Sect1_XAIDefinition from "./components/Sect1_XAIDefinition";

export default function App() {
  const [targetsElement, setTargetsElement] =
    useState<NodeListOf<HTMLElement>>();
  const [activeElement, setActiveElement] = useState(0);
  const scrollRefElement = useRef<HTMLElement>(null);

  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  useEffect(() => {
    setTargetsElement(
      scrollRefElement.current?.querySelectorAll(".scrollspy-section")
    );
  }, []);

  return (
    <div>
      <div className="app">
        {/* sidebar */}

        <div className="sidebar">
          <MDBScrollspyNavList className="flex-column nav-pills menu-sidebar">
            {/* 1. what is XAI */}
            <MDBScrollspyNavItem className="navItem">
              {/* What is XAI */}
              <MDBScrollspyNavLink
                active={activeElement === 1}
                scrollElement={targetsElement && targetsElement[0]}
                // collapsible
                className="special-nav-title"
              >
                1. What is XAI
              </MDBScrollspyNavLink>

              {/* What is XAI 3 subsections */}
              <MDBScrollspyNavList
                active={
                  activeElement === 1 ||
                  activeElement === 2 ||
                  activeElement === 3 ||
                  activeElement === 4 ||
                  activeElement === 5 ||
                  activeElement === 6 ||
                  activeElement === 7 ||
                  activeElement === 8 ||
                  activeElement === 9 ||
                  activeElement === 10 ||
                  activeElement === 11 ||
                  activeElement === 12
                }
                collapsible
                className="flex-column ps-3"
              >
                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 2}
                    scrollElement={targetsElement && targetsElement[1]}
                  >
                    <div className="subSection-header">
                      Definitions and Concepts
                    </div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 3}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 3}
                        scrollElement={targetsElement && targetsElement[2]}
                      >
                        <div className="subSection-header">XAI Definition</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 4}
                        scrollElement={targetsElement && targetsElement[3]}
                      >
                        <div className="subSection-header">3 Notions</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>

                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 5}
                    scrollElement={targetsElement && targetsElement[4]}
                  >
                    <div className="subSection-header">Perspectives of XAI</div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 6}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 6}
                        scrollElement={targetsElement && targetsElement[5]}
                      >
                        <div className="subSection-header">Goals</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 7}
                        scrollElement={targetsElement && targetsElement[6]}
                      >
                        <div className="subSection-header">Stakeholders</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 8}
                        scrollElement={targetsElement && targetsElement[7]}
                      >
                        <div className="subSection-header">Desiderata</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>

                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 9}
                    scrollElement={targetsElement && targetsElement[8]}
                  >
                    <div className="subSection-header">
                      Types of XAI Techniques
                    </div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 10}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 10}
                        scrollElement={targetsElement && targetsElement[9]}
                      >
                        <div className="subSection-header">Main Approaches</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 11}
                        scrollElement={targetsElement && targetsElement[10]}
                      >
                        <div className="subSection-header">
                          Transparent Models
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 12}
                        scrollElement={targetsElement && targetsElement[11]}
                      >
                        <div className="subSection-header">
                          Post-hoc Techniques
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>
              </MDBScrollspyNavList>
            </MDBScrollspyNavItem>

            {/* 2. Case Studies */}
            <MDBScrollspyNavItem className="navItem">
              {/* Case studies */}
              <MDBScrollspyNavLink
                active={activeElement === 13}
                scrollElement={targetsElement && targetsElement[12]}
                // collapsible
                className="special-nav-title"
              >
                2. Case Studies
              </MDBScrollspyNavLink>

              {/* Case studies 2 subsections */}
              <MDBScrollspyNavList
                active={
                  activeElement === 13 ||
                  activeElement === 14 ||
                  activeElement === 15 ||
                  activeElement === 16 ||
                  activeElement === 17 ||
                  activeElement === 18
                }
                // collapsible
                className="flex-column ps-3"
              >
                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 14}
                    scrollElement={targetsElement && targetsElement[13]}
                  >
                    <div className="subSection-header">
                      Notable Technique - SHAP
                    </div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 15}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 15}
                        scrollElement={targetsElement && targetsElement[14]}
                      >
                        <div className="subSection-header">Theory</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 16}
                        scrollElement={targetsElement && targetsElement[15]}
                      >
                        <div className="subSection-header">Demo</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>

                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 17}
                    scrollElement={targetsElement && targetsElement[16]}
                  >
                    <div className="subSection-header">Data Biography</div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 18}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 18}
                        scrollElement={targetsElement && targetsElement[17]}
                      >
                        <div className="subSection-header">Census</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>
              </MDBScrollspyNavList>
            </MDBScrollspyNavItem>

            {/* 3. Nuances to Explainability */}
            <MDBScrollspyNavItem className="navItem">
              {/* Nuances to Explainability */}
              <MDBScrollspyNavLink
                active={activeElement === 19}
                scrollElement={targetsElement && targetsElement[18]}
                // collapsible
                className="special-nav-title"
              >
                3. Nuances to Explainability
              </MDBScrollspyNavLink>

              {/* Case studies 2 subsections */}
              <MDBScrollspyNavList
                active={
                  activeElement === 19 ||
                  activeElement === 20 ||
                  activeElement === 21 ||
                  activeElement === 22 ||
                  activeElement === 23 ||
                  activeElement === 24 ||
                  activeElement === 25 ||
                  activeElement === 26
                }
                // collapsible
                className="flex-column ps-3"
              >
                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 20}
                    scrollElement={targetsElement && targetsElement[20]}
                  >
                    <div className="subSection-header">
                      Usability Testing Results
                    </div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 21}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 21}
                        scrollElement={targetsElement && targetsElement[20]}
                      >
                        <div className="subSection-header">
                          How Understandable?
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 22}
                        scrollElement={targetsElement && targetsElement[21]}
                      >
                        <div className="subSection-header">
                          Biased Decision Making?
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 23}
                        scrollElement={targetsElement && targetsElement[22]}
                      >
                        <div className="subSection-header">
                          Explanatory Pluralism
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>

                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 24}
                    scrollElement={targetsElement && targetsElement[23]}
                  >
                    <div className="subSection-header">Challenges With XAI</div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 25}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    {/* <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 26}
                        scrollElement={targetsElement && targetsElement[25]}
                      >
                        <div className="subSection-header">
                          Biased Interpretation
                        </div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 27}
                        scrollElement={targetsElement && targetsElement[26]}
                      >
                        <div className="subSection-header">WTF</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem> */}
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>

                <MDBScrollspyNavItem>
                  <MDBScrollspyNavLink
                    className="navSubsection"
                    active={activeElement === 25}
                    scrollElement={targetsElement && targetsElement[24]}
                  >
                    <div className="subSection-header">Evaluation Methods</div>
                  </MDBScrollspyNavLink>
                </MDBScrollspyNavItem>
              </MDBScrollspyNavList>
            </MDBScrollspyNavItem>
          </MDBScrollspyNavList>
        </div>

        {/* content */}
        <MDBScrollspy
          onElement
          ref={scrollRefElement}
          setActive={setActiveElement}
          targets={targetsElement}
          className="content"
        >
          {/* 1. what is XAI content */}
          <MDBScrollspySection>
            {/* what is XAI? */}
            <div className="content-big-section">
              <h1>1. What is XAI?</h1>
              <p>
                XAI stands for eXplainable Artificial Intelligence, and it is a
                fastly expanding field with great potential impact on our
                society.
              </p>
              <p>
                AI methods are achieving unprecedented levels of performance
                when learning to solve increasingly complex computational tasks,
                making them a big driver for the future development of the human
                society.
              </p>
              <p>
                In the recent decade, there has been a rise of decision systems
                such as Deep Neural Networks that are opaque and considered
                "black box" models. When decisions derived from such systems
                ultimately affect humans’ lives (like in medicine, law,
                policing, or defense), there is an emerging need for
                understanding how such decisions are made by AI The danger is
                when we use decisions made by AI that are not justifiable,
                legitimate, or do not allow us to see detailed explanations of
                why.
              </p>
              <p>
                Further, there is a gap between the research community and
                business sectors - lack of adoption of some AI solutions in
                highly regulated industries like finance, security, and health,
                because people are reluctant to adopt techniques that are not
                directly interpretable and trustworthy.
              </p>
            </div>

            <MDBScrollspySection>
              {/* defs and concepts */}
              <h3 className="content-section">Definitions and Concepts</h3>

              <MDBScrollspySection>
                <Sect1_XAIDefinition></Sect1_XAIDefinition>
              </MDBScrollspySection>

              <MDBScrollspySection>
                <div className="accordions-collapsible">
                  <h3>3 Important Notions of XAI</h3>
                  <MDBAccordion alwaysOpen initialActive={"1"}>
                    <MDBAccordionItem
                      collapseId={"1"}
                      headerTitle="Opaque System"
                    >
                      See slide 2 in this{" "}
                      <a href="https://docs.google.com/presentation/d/1y5kUUEMTiuC13qZKVHLvzrKB4O6O5tBDbo46iVQS_so/edit#slide=id.p">
                        Google Slides
                      </a>{" "}
                      for what this would look like.
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={"2"}
                      headerTitle="Transparent System"
                    >
                      See slide 3 in this{" "}
                      <a href="https://docs.google.com/presentation/d/1y5kUUEMTiuC13qZKVHLvzrKB4O6O5tBDbo46iVQS_so/edit#slide=id.g129b6b68e88_0_16">
                        Google Slides
                      </a>{" "}
                      for what this would look like.
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={"3"}
                      headerTitle="Explainable System"
                    >
                      See slide 4 in this{" "}
                      <a href="https://docs.google.com/presentation/d/1y5kUUEMTiuC13qZKVHLvzrKB4O6O5tBDbo46iVQS_so/edit#slide=id.g129b6b68e88_0_32">
                        Google Slides
                      </a>{" "}
                      for what this would look like.
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </MDBScrollspySection>
            </MDBScrollspySection>

            <MDBScrollspySection>
              {/* defs and concepts */}
              <Section title="Perspectives of XAI"></Section>

              <MDBScrollspySection>
                <Subsection title="Goals"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* 3 Notions */}
                <Subsection title="Stakeholders"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* 3 Notions */}
                <Subsection title="Desiderata"></Subsection>
              </MDBScrollspySection>
            </MDBScrollspySection>

            <MDBScrollspySection>
              {/* Types of XAI Techniques */}
              <Section title="Types of XAI Techniques"></Section>

              <MDBScrollspySection>
                {/* Main Approaches */}
                <Subsection title="Main Approaches"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* Transparent Models */}
                <Subsection title="Transparent Models"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* Post-hoc Techniques */}
                <Subsection title="Post-hoc Techniques"></Subsection>
              </MDBScrollspySection>
            </MDBScrollspySection>
          </MDBScrollspySection>

          {/* 2. case studies content */}
          <MDBScrollspySection>
            <BigSection title="2. Case Studies"></BigSection>

            <MDBScrollspySection>
              {/* Notable Technique - SHAP */}
              <Section title="Notable Technique - SHAP"></Section>

              <MDBScrollspySection>
                {/* Theory */}
                <ShapTheorySection></ShapTheorySection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* Demo */}
                <Subsection title="Demo"></Subsection>
              </MDBScrollspySection>
            </MDBScrollspySection>

            <MDBScrollspySection>
              <Section title="Data Biography"></Section>

              <MDBScrollspySection>
                <Subsection title="Census"></Subsection>
              </MDBScrollspySection>
            </MDBScrollspySection>
          </MDBScrollspySection>

          {/* 3. XAI in the real world content */}
          <MDBScrollspySection>
            <BigSection title="3. Nuances to Explainability"></BigSection>

            <MDBScrollspySection>
              <Section title="Usability Testing Results"></Section>

              <MDBScrollspySection>
                {/* Are XAI Techniques always understandable? Perhaps not */}
                <div className="content-subsection">
                  <h3>Are Explanations always understandable? Perhaps not</h3>
                  <p>
                    <b>
                      Source:{" "}
                      <a href="https://www.sciencedirect.com/science/article/pii/S1566253521002402">
                        A novel model usability evaluation framework (MUsE) for
                        explainable artificial intelligence
                      </a>
                    </b>
                  </p>
                  <p>
                    This paper examines the UX effectiveness of the Local
                    Interpretable Model-Agnostic Explanations (LIME) xAI
                    framework, one of the most popular model agnostic frameworks
                    found in the literature.
                  </p>
                  <p>
                    As part of the study, the authors evaluate the
                    understandability of the output produced by LIME via a
                    usability study that involves participants who are not
                    familiar with LIME. However, the authors found that the
                    results produced by the framework are difficult to
                    understand without documentation and/or explanation.
                  </p>
                  <p>Results from the usability interviews are as follows:</p>

                  <div className="questions-collapsible">
                    <h4>First Part : Just the most basic context</h4>
                    <p>
                      The interviewees were given a quick introduction into rain
                      prediction, as well as a quick introduction into the
                      applicable machine learning methods. Then, they were shown
                      this explanation to the regression model:
                    </p>
                    <img
                      src="https://ars.els-cdn.com/content/image/1-s2.0-S1566253521002402-gr3_lrg.jpg"
                      alt="rain-prediction-LIME-explanation"
                    ></img>
                    <p>and then were asked questions about the graph.</p>
                    <MDBAccordion alwaysOpen initialActive={"1"}>
                      <MDBAccordionItem
                        collapseId={"1"}
                        headerTitle="What do you see in this graph?
                        "
                      >
                        <strong>
                          All interviewees expressed uncertainty about what the
                          illustrations show.
                        </strong>{" "}
                        <p className="questions-answers">
                          All started with identifying the three graphs and
                          tried to make sense of the different numbers. Although
                          a few participants struggled with the
                          prediction-probabilities and the feature-value graph,
                          every participant had difficulties interpreting the
                          feature probabilities as the numbers did not seem to
                          add up and there was too much information given in a
                          badly structured way.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"2"}
                        headerTitle="Which feature influences the prediction and how?
                        "
                      >
                        <strong>
                          Results varied depending on whether they had prior
                          knowledge in machine learning.
                        </strong>{" "}
                        <p className="questions-answers">
                          People without prior machine learning knowledge
                          struggled to see the relation between the prediction
                          probabilities and the classification, but those with
                          prior knowledge in machine learning concluded, that
                          there is a connection between the feature
                          probabilities and the prediction probabilities graph.
                          Five concluded correctly, that the second smaller
                          numbers on the central graph are probabilities, as
                          they are between 0 and 1 and influence the
                          predictability.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"3"}
                        headerTitle="Do you know why the model made this prediction?"
                      >
                        <strong>
                          5 out of 12 interviewees (41.6%) answered correctly.
                        </strong>{" "}
                        <p className="questions-answers">
                          Correct answer: the classification is determined by
                          the numbers of the feature probabilities graph.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"4"}
                        headerTitle="How well can you interpret the results of the prediction of the graph, on an increasing scale from 1-10?"
                      >
                        <strong>
                          The interpretability of the LIME output was rated with
                          an average of 4.16.
                        </strong>{" "}
                        <p className="questions-answers">
                          The rating between the subgroups differed
                          significantly, as the participants without prior
                          knowledge gave an average of 3.16 and the participants
                          with prior knowledge 5.16, respectively.
                        </p>
                      </MDBAccordionItem>
                    </MDBAccordion>
                  </div>

                  <div className="questions-collapsible">
                    <h4>
                      Second Part : With an explanation of meaning of the
                      explanation graph
                    </h4>
                    <p>
                      The second section started with a short explanation of
                      each graph of the LIME output as well as an explanation of
                      the meaning of the r-squared value at the bottom of the
                      output. The participants were subsequently shown another
                      LIME output and were asked four more questions.
                    </p>

                    <MDBAccordion alwaysOpen initialActive={"1"}>
                      <MDBAccordionItem
                        collapseId={"1"}
                        headerTitle="What do you see in the second graph?
                        "
                      >
                        <strong>
                          The answers improved significantly after the
                          participants were given the explanation for each
                          graph.
                        </strong>{" "}
                        <p className="questions-answers">
                          7 participants understood the graphs correctly, but
                          were still uncertain where the probabilities of the
                          prediction probabilities graph came from. Four of the
                          participants with a machine learning background and
                          one without understood the framework after the
                          explanation. Another six pointed out that the
                          r-squared scores of both models were low, which
                          resulted in concerns about the reliability of the
                          prediction.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"2"}
                        headerTitle="How well can you interpret the results of the prediction, on an increasing scale from 1-10?
                        "
                      >
                        <strong>
                          The interpretability of the graph after the
                          explanation improved significantly, to an average of
                          7.08.
                        </strong>{" "}
                        <p className="questions-answers">
                          Participants with prior machine learning knowledge
                          again rated it slightly higher with an average of
                          7.91, compared to an average of 6.25 by the
                          participants without prior knowledge.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"3"}
                        headerTitle="What differences do you see between this one and the other graph?"
                      >
                        <strong>
                          Participants noticed new things about the graphs.
                        </strong>{" "}
                        <p className="questions-answers">
                          All participants noted the different prediction
                          probabilities. Some participants pointed out that
                          there is a big difference on how the features in the
                          different outputs were rated and that the numbers of
                          the feature value graph had changed.
                        </p>
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={"4"}
                        headerTitle="Is there anything that stands out as strange or unusual?"
                      >
                        <p className="questions-answers">
                          9 out of 12 participants stated that the central graph
                          was not very interpretable and 4 mentioned that they
                          found the choice of colors disturbing. Furthermore, 6
                          interviewees suggested a legend, titles or a short
                          explanation should be included in the output
                          visualization to improve its interpretability.
                        </p>
                      </MDBAccordionItem>
                    </MDBAccordion>
                  </div>
                </div>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* Biased Decision Making */}
                <div className="content-subsection">
                  <h3>
                    How Humans Interpret Explanations : Cognitive Biases at
                    Work?
                  </h3>
                  <p>
                    <b>
                      Source:{" "}
                      <a href="https://osf.io/5jzmb/download/?format=pdf">
                        Initial evidence for biased decision-making despite
                        human-centered AI explanations.
                      </a>
                    </b>
                  </p>
                  <p>
                    XAI has primarily focused on biased data and prejudice due
                    to incorrect assumptions in the machine learning process
                  </p>
                  <p>
                    However, the implications of potential biases and heuristics
                    that humans exhibit when being presented an explanation by
                    AI have received little attention in the current XAI debate.
                  </p>
                  <p>
                    This paper examined the effects of human-centered
                    explanations on trust behavior in a financial
                    decision-making experiment and found that
                    <ul>
                      <li>
                        AI explanations lead to higher trust behavior if
                        participants were advised to decrease an initial price
                        estimate.{" "}
                      </li>
                      <li>
                        However, explanations had no effect if the AI
                        recommended increase the initial price estimate.{" "}
                      </li>
                    </ul>
                  </p>
                  <p>
                    The paper argues that these differences in trust behavior
                    may be caused by cognitive biases and heuristics that people
                    retain in their decision-making processes involving AI.
                  </p>
                  <p>
                    It is possible that inherent biases and heuristics are so
                    hard-wired that AI explanations are not convincing enough to
                    disprove non-optimal human decision-making.
                  </p>
                  <p>
                    If that is the case, AI may not help us to reach better
                    decisions in circumstances where human intuition becomes too
                    tempting for our judgment.
                  </p>
                  <p>
                    The authors suggest that the XAI community should account
                    for potential biases and heuristics in order to design for
                    truly human-centered explanations that help optimizing
                    decision-making. Biased decisions will not simply disappear
                    because AI is involved, and while heuristics are useful in
                    some situations, we may not want them to influence us in
                    others.
                  </p>
                </div>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* Biased Decision Making */}
                <div className="content-subsection">
                  <h3>Explanatory Pluralism</h3>
                  <p>
                    <b>
                      Source:{" "}
                      <a href="https://www.dropbox.com/s/tar08j70odse0io/HCXAI2021_paper_1.pdf?dl=0">
                        System Explanations: A Cautionary Tale
                      </a>
                    </b>
                  </p>
                  <p>
                    This paper conducted a pilot study that asked 6 different
                    judges to rate how comprehensible a set of 100
                    justifications produced by a textural entailment system was
                    on a five-point scale.
                  </p>
                  <p>
                    However, the results showed the judges had very different
                    ideas of what constitutes a good explanation.
                  </p>
                  <p>
                    Some judges preferred explanations in precise logical
                    notation that other judges hated, which seemed to have
                    varied with the amount of mathematical training in a judge’s
                    background. Despite the divide on logical notation, all
                    judges valued conciseness and wanted the explanations to
                    focus on the specifics.
                  </p>
                  <p>
                    More than half of the explanations received both one rating
                    of ‘Very Poor’ or ‘Poor’ and one rating of ‘Good’ or ‘Very
                    Good’; and in 32 cases out of the 100 cases, the same
                    explanation received all five possible ratings from ‘Very
                    Poor’ through ‘Very Good’.
                  </p>
                  <p>
                    The paper discusses that the underlying problem is that
                    eventual end users still have different opinions as to what
                    constitutes an effective explanation, so this is still an
                    area that requires further research.
                  </p>

                  <hr></hr>

                  <p>
                    <b>
                      Source:{" "}
                      <a href="https://www.dropbox.com/s/3um8xihmsrk7qbk/HCXAI2021_paper_18.pdf?dl=0">
                        AI Explainability: Why One Explanation Cannot Fit All
                      </a>
                    </b>
                  </p>
                  <p>
                    This paper emphasizes that the evaluation of the usefulness
                    of the explainability method cannot be detached from the
                    specific context and its specific intended use cases in that
                    context. The explainability method that is perceived as
                    useful by the same audience in one context for one task
                    might be perceived as not useful in another, even if the AI
                    model and the explanation used are essentially the same.
                  </p>
                  <p>
                    The purpose of explainability in AI models can vary greatly
                    based on the audience. For example, the purpose of having
                    explainability for the users of the model is to trust the
                    model, while users affected by model decisions could benefit
                    from explainability by understanding their situation better,
                    and verifying whether the decisions were fair. Since these
                    audiences have different goals, this means that an
                    explanation that may be considered to be good by one type of
                    audience but not another.
                  </p>
                </div>
              </MDBScrollspySection>
            </MDBScrollspySection>

            <MDBScrollspySection>
              <div className="content-section">
                <h3>Challenges with XAI</h3>
                <p>
                  <b>
                    Source:{" "}
                    <a href="https://www.sciencedirect.com/science/article/pii/S0740624X21001027?pes=vor">
                      The perils and pitfalls of explainable AI: Strategies for
                      explaining algorithmic decision-making
                    </a>
                  </b>
                </p>
                <p>
                  <strong>1. Lack of expertise</strong>
                  <ul>
                    <li>
                      Most persons will lack the expertise to understand the
                      explanation and assess the fairness of the decision.
                    </li>
                  </ul>

                  <strong>2. Lack of expertise</strong>
                  <ul>
                    <li>
                      Experts explaining algorithms also make biased and
                      inherently disputable choices. Tools and instruments can
                      be used to abstract and explain decisions, but this
                      results in a further deviation of how the actual AI-based
                      decision is taken, and the simplification might be
                      contestable. Further, in the process of deriving the
                      conceptual ‘translation’ that a broader audience can
                      understand, the translator also makes inherently
                      disputable (biased) choices. For instance, political
                      preferences might be reflected by an explanation.
                    </li>
                  </ul>

                  <strong>3. Dynamics of data and decisions</strong>
                  <ul>
                    <li>
                      Data and decisions change over time, and therefore
                      explanations change.
                    </li>
                  </ul>

                  <strong>4. Interference of algorithms</strong>
                  <ul>
                    <li>
                      Often there is a whole chain of activities to collect and
                      process data from various types of sources, and many,
                      often different kinds of algorithms are used.
                    </li>
                  </ul>

                  <strong>5. Context-dependency</strong>
                  <ul>
                    <li>
                      Algorithms cannot be explained at a general level, as
                      outcomes might be different per individual.
                    </li>
                  </ul>

                  <strong>
                    6. Ill-structured nature of the problems addressed
                  </strong>
                  <ul>
                    <li>
                      Some problems are ill-structured, are ambiguous by nature
                      and can be solved in different ways. Algorithms provide
                      one answer that is contestable and changes over time.
                    </li>
                  </ul>

                  <strong>7. Causality is not used for making decisions</strong>
                  <ul>
                    <li>
                      If the causality is explained between inputs and outputs,
                      this does not mean that the algorithm uses that causality
                      to arrive at a decision. Furthermore, the explanation of
                      causality might change over time.
                    </li>
                  </ul>
                </p>
              </div>

              <MDBScrollspySection>
                {/* Biased Decision Making */}
                <div className="content-section">
                  <h3>2 Ways of Evaluating Explainability</h3>
                  <p>
                    <b>
                      Source:{" "}
                      <a href="https://hfast.mie.utoronto.ca/wp-content/uploads/HCXAI2021_paper_25.pdf">
                        Evaluating human understanding in XAI systems
                      </a>
                    </b>
                  </p>
                  <p>
                    Quantitatively evaluating human understanding of XAI systems
                    and the impact of explanations on human understanding is a
                    current challenge in XAI research.
                  </p>
                  <p>
                    Quantitative evaluations tend to fall into two main
                    approaches:
                  </p>

                  <h5>1. Proxy Tasks</h5>
                  <ul>
                    <li>
                      Proxy tasks are simplified tasks where human understanding
                      is evaluated on the basis of successful prediction of the
                      decision or the decision boundaries of the AI through the
                      assistance of explanations.
                    </li>
                    <li>
                      Proxy tasks are based on the idea of human understanding
                      as the ability of users to simulate AI behavior.
                    </li>
                    <li>
                      The first task is termed <b>forward simulation</b> and
                      assesses human ability to predict an AI’s output given
                      input data and an explanation of the AI’s behavior.
                    </li>
                    <li>
                      The second task is termed counterfactual simulation and
                      assesses human ability to use input data, an explanation,
                      and an AI’s output to predict the AI’s output given a
                      perturbation of the original input data.
                    </li>
                  </ul>
                  <h5>2. Mental Models</h5>
                  <ul>
                    <li>
                      Mental model tasks involve the elicitation and measurement
                      of users’ mental models of an AI system, which can be
                      defined as humans’ internal representations of the
                      structure and function of a given system and can be
                      elicited and analyzed in the context of evaluations of
                      human XAI systems.
                    </li>
                    <li>
                      Subjects’ mental models have been elicited both
                      qualitatively (ex. through structured interviews) and
                      quantitatively (ex. through comprehension scores)
                    </li>
                    <li>
                      Non-expert humans’ mental models are likely to deviate
                      from designers’ conceptual model of a system, and thus
                      they could be incomplete or imprecise
                    </li>
                    <li>
                      Mental models do not have to be accurate to serve their
                      function, as long as they enable a level of understanding
                      that allows humans to interact safely with an AI system
                      (e.g., with the awareness that it can fail).
                    </li>
                  </ul>
                </div>
              </MDBScrollspySection>
            </MDBScrollspySection>
          </MDBScrollspySection>
        </MDBScrollspy>

        {/* <MDBAccordion alwaysOpen initialActive="panelsStayOpen-collapse1">
        <MDBAccordionItem
          collapseId="panelsStayOpen-collapse1"
          headerTitle="Accordion Item #1"
        >
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the .accordion-body, though the transition does limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId="panelsStayOpen-collapse2"
          headerTitle="Accordion Item #2"
        >
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the .accordion-body, though the transition does limit
          overflow.
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId="panelsStayOpen-collapse3"
          headerTitle="Accordion Item #3"
        >
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the .accordion-body, though the transition does limit overflow.
        </MDBAccordionItem>
      </MDBAccordion>

      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard> */}
      </div>
    </div>
  );
}
