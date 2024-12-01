import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CollapsibleCard from "./CollapsedCard";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SectionTitle from "../Splitter/SectionTitle";

const experiences = [
  {
    title: "Data Scientist",
    company:
      "Mental Therapeutic Alliance Match Associated with Greenspace, Vancouver, BC",
    period: "Apr 2024 – Jun 2024",
    descriptions: [
      "Developed a machine learning model using K-Means clustering and a tailored Random Forest with cross-validation to match patients with the top 3 suitable therapists based on health history and suicidal intentions, boosting accuracy from 5% to 52%.",
      "Optimized PostgreSQL queries for a business-critical database with 4M+ patient and therapist records, reducing processing time by 30% and enhancing data retrieval speed for critical operations.",
      "Preprocessed data with Pandas; applied one-hot encoding to categorize patient features such as mental health history and suicide risk, and normalized therapists' quantified data to prepare the dataset for subsequent statistical analyses.",
    ],
  },
  {
    title: "Full-Stack Software Engineer (Intern)",
    company: "Space, Markham, ON",
    period: "May 2022 – Aug 2022",
    descriptions: [
      "Developed and deployed a server monitoring dashboard in NextJS with Redux for optimized state management and GraphQL subscriptions for instant data synchronization.",
      "Engineered an automated email notification system with Node-cron to send timely alerts, improving system responsiveness by instantly reacting to breached performance metrics and triggering alerting email, reducing issue detection time by 40%.",
      "Enhanced the UI/UX of the new product subscription page by employing A/B testing, leveraging Google Optimize and Google Analytics on layout and call-to-action elements, resulting in a 7% increase in subscriptions within one month.",
      "Implemented unit and end-to-end testing framework using Jest and Selenium, covering core features such as task scheduling, task rendering pages, and API response time and accuracy, achieving over 95% test coverage.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Smart-Blinds Associated with AI Shading, Calgary, AB",
    period: "Jan 2022 – Apr 2022",
    descriptions: [
      "Led a team of 6 in the agile development of a decentralized, full-stack web application using ReactJS, Spring Boot, and PostgreSQL to process and store real-time data from IoT smart shades via the Tuya SDK.",
      "Created an automated backup processing system using Google Drive and OAuth, increasing backup frequency from weekly to daily.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company: "Nippon Electric Company, Xi'an, China",
    period: "Sep 2021 – Dec 2021",
    descriptions: [
      "Developed and integrated the backend API for the Emoji Reaction feature in Django, allowing users to engage dynamically with posts through real-time reactions.",
      "Integrated Photon Voice into Unity3D to achieve VR voice chat function, enabling the creation of chat rooms for meetings.",
      "Executed a suite of automated tests to enhance software reliability, including unit tests with PyTest for function validation and performance tests with Unity Profiler.",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience-container">
      <SectionTitle title="EXPERIENCE" />
      <VerticalTimeline className="timeline">
        {experiences.map((exp, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className={"timeline-element"}
              date={exp.period}
              contentStyle={{
                background: "#E8D2E9",
                color: "black",
              }}
              icon={<i className="fas fa-briefcase" />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.company}
              </h4>
              <ul>
                {exp.descriptions.map((description, liIndex) => {
                  return (
                    <li style={{ margin: "5px" }} key={liIndex}>
                      {description}
                    </li>
                  );
                })}
              </ul>
              {/* <CollapsibleCard title="haha"></CollapsibleCard> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
