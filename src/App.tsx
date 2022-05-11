// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import {
  MDBScrollspy,
  MDBScrollspyNavItem,
  MDBScrollspySection,
  MDBScrollspyNavLink,
  MDBScrollspyNavList,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Section from "./components/Section";
import Subsection from "./components/Subsection";
import BigSection from "./components/BigSection";
import ShapTheorySection from "./components/ShapTheorySection";
import XAIDefinition from "./components/Sect1_XAIDefinition";
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
                        <div className="subSection-header">Research Fields</div>
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
                  activeElement === 18 ||
                  activeElement === 19
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
                      Notable Technique - LIME
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

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 19}
                        scrollElement={targetsElement && targetsElement[18]}
                      >
                        <div className="subSection-header">MNIST</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
                </MDBScrollspyNavItem>
              </MDBScrollspyNavList>
            </MDBScrollspyNavItem>

            {/* 3. XAI in the Real World */}
            <MDBScrollspyNavItem className="navItem">
              {/* XAI in the real world */}
              <MDBScrollspyNavLink
                active={activeElement === 20}
                scrollElement={targetsElement && targetsElement[19]}
                // collapsible
                className="special-nav-title"
              >
                3. Nuances to Explainability
              </MDBScrollspyNavLink>

              {/* Case studies 2 subsections */}
              <MDBScrollspyNavList
                active={
                  activeElement === 20 ||
                  activeElement === 21 ||
                  activeElement === 22 ||
                  activeElement === 23 ||
                  activeElement === 24 ||
                  activeElement === 25 ||
                  activeElement === 26 ||
                  activeElement === 27
                }
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
                      Usability Testing Results
                    </div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 22}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 22}
                        scrollElement={targetsElement && targetsElement[21]}
                      >
                        <div className="subSection-header">
                          How Understandable?
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
                          Biased Decision Making?
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
                    <div className="subSection-header">On Explainability</div>
                  </MDBScrollspyNavLink>

                  <MDBScrollspyNavList
                    active={activeElement === 25}
                    // collapsible
                    className="flex-column ps-3"
                  >
                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 25}
                        scrollElement={targetsElement && targetsElement[24]}
                      >
                        <div className="subSection-header">How to Evaluate</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
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
                    </MDBScrollspyNavItem>
                  </MDBScrollspyNavList>
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
            <BigSection title="1. What is XAI?"></BigSection>

            <MDBScrollspySection>
              {/* defs and concepts */}
              <h3 className="content-section">Definitions and Concepts</h3>

              <MDBScrollspySection>
                {/* XAI Definition */}
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
                      <strong>This is the first item's accordion body.</strong>{" "}
                      <p>some more text.</p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={"2"}
                      headerTitle="Transparent System"
                    >
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      collapseId={"3"}
                      headerTitle="Explainable System"
                    >
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </MDBScrollspySection>
            </MDBScrollspySection>

            <MDBScrollspySection>
              {/* defs and concepts */}
              <Section title="Perspectives of XAI"></Section>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="Goals"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* 3 Notions */}
                <Subsection title="Stakeholders"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* 3 Notions */}
                <Subsection title="Research Fields"></Subsection>
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
              {/* XAI Definition */}
              <Section title="Data Biography"></Section>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="Census"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="MNIST"></Subsection>
              </MDBScrollspySection>
            </MDBScrollspySection>
          </MDBScrollspySection>

          {/* 3. XAI in the real world content */}
          <MDBScrollspySection>
            <BigSection title="3. Nuances to Explainability"></BigSection>

            <MDBScrollspySection>
              {/* XAI Definition */}
              <Section title="Issues and Challenges"></Section>

              <MDBScrollspySection>
                {/* Are XAI Techniques always understandable? Perhaps not */}
                <div className="content-section">
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
                <div className="content-section">
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
            </MDBScrollspySection>

            <MDBScrollspySection>
              {/* XAI Definition */}
              <Section title="Explainability"></Section>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="Ways of Evaluation"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="Bias Interpretations"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title=""></Subsection>
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
