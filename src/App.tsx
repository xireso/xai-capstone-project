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
                3. XAI in the Real World
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
                      XAI and the Common Good
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
                        <div className="subSection-header">Responsible AI</div>
                      </MDBScrollspyNavLink>
                    </MDBScrollspyNavItem>

                    <MDBScrollspyNavItem>
                      <MDBScrollspyNavLink
                        className="navSubsection"
                        active={activeElement === 23}
                        scrollElement={targetsElement && targetsElement[22]}
                      >
                        <div className="subSection-header">AI Principles</div>
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
                <div className="notions-collapsible">
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
            <BigSection title="3. XAI in the Real World"></BigSection>

            <MDBScrollspySection>
              {/* XAI Definition */}
              <Section title="XAI and the Common Good"></Section>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="Responsible AI"></Subsection>
              </MDBScrollspySection>

              <MDBScrollspySection>
                {/* XAI Definition */}
                <Subsection title="AI Principles"></Subsection>
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
