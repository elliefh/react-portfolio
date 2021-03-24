import React from "react";
import MyProject from "../components/Project";
import Container from "react-bootstrap/Container";
import EmployeeDirectoryImg from '../images/employee-directory.png';
import NoteTakerImg from '../images/notetaker.png';
import WeatherDashboardImg from '../images/weatherdashboard.png';
import CocktailGeneratorImg from '../images/cocktailgenerator.png';
import FeastWithFriendsImg from '../images/feastwithfriends.png';
import WorkDayPlannerImg from '../images/workdayplanner.png';

function Portfolio(props) {
    const projects = [
        {
            name: "Employee Directory",
            description: "An application that allows an employee or manager to view, sort, and filter non-sensitive data about other employees.",
            image: EmployeeDirectoryImg, 
            languages: "HTML, CSS, JavaScript, Node.js, ReactJS, Random User API",
            repoLink: "https://github.com/elliefh/employee-directory",
            liveLink: "https://elliefh.github.io/employee-directory/",
            id: "project-1"
        },
        {
            name: "Note Taker",
            description: "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
            image: NoteTakerImg, 
            languages: "HTML, CSS, JavaScript, Node.js, Express",
            repoLink: "https://github.com/elliefh/note_taker",
            liveLink: "https://note-taker-efh.herokuapp.com",
            id: "project-2"
        },
        {
            name: "Weather Dashboard",
            description: "An application that dynamically displays weather details for any searched location.",
            image: WeatherDashboardImg, 
            languages: "HTML, CSS, OpenWeather API",
            repoLink: "https://github.com/elliefh/weather_dashboard",
            liveLink: "https://elliefh.github.io/weather_dashboard/",
            id: "project-3"
        },
        {
            name: "Work Day Planner",
            description: "A simple calendar application that allows the user to save events for each hour of the typical working day.",
            image: WorkDayPlannerImg, 
            languages: "HTML, CSS, jQuery",
            repoLink: "https://github.com/elliefh/work_day_planner",
            liveLink: "https://elliefh.github.io/work_day_planner/",
            id: "project-4"
        },
        {
            name: "Cocktail Generator",
            description: "An application that provides cocktail recommendations based on the User’s location’s weather and time of day.",
            image: CocktailGeneratorImg, 
            languages: "HTML, CSS, JavaScript, CocktailDB + OpenWeather API",
            repoLink: "https://github.com/zehrl/cocktail-generator",
            liveLink: "https://zehrl.github.io/cocktail-generator/",
            id: "project-5"
        },
        {
            name: "Feast With Friends",
            description: "An application that provides restaurant recommendations based on User’s dietary preferences and specificed city.",
            image: FeastWithFriendsImg, 
            languages: "JavaScript, Node.js, MySQL, Handlebars, Yelp API",
            repoLink: "https://github.com/laurenb08/feastWithFriends",
            liveLink: "https://feastwithfriendsproject.herokuapp.com/",
            id: "project-6"
        }
    ];

    return(
        <Container className="d-flex flex-wrap justify-content-center">
            <p className = "page-title">Highlighted Projects</p>
            {projects.map(project => (
            <MyProject
                key = {project.id}
                name = {project.name}
                description = {project.description}
                image = {project.image}
                languages = {project.languages}
                repoLink = {project.repoLink}
                liveLink = {project.liveLink}
            />
            ))}
        </Container> 
    )
}

export default Portfolio;