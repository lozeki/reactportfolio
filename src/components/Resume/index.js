import React from 'react'
import avatar from '../../images/img-2.png';
import {
    ResumeContainer,
    ResumeWrapper,    
    Column1,
    Column2,
    Column3,
    Column4,
    Column5,
    Column6,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    A
} from './ResumeElements'

function Resume() {
   
    return (
        <>        
        <ResumeContainer>          
            <ResumeWrapper>
                <Column1>
                    <TextWrapper>
                        <TopLine >TRI NGUYEN</TopLine>
                        <Heading >Software Engineer</Heading>
                    </TextWrapper>                    
                </Column1>
                <Column2> 
                    <Subtitle><strong>Phone:</strong> 603 264 3168</Subtitle>
                    <Subtitle><strong>Email:</strong> nguyenmtri83@gmail.com</Subtitle>                        
                    <Subtitle><strong>Website:</strong> <A href ='http://tricoding.net/'>tricoding.net</A></Subtitle>
                    <Subtitle><strong>Location:</strong> New Hampshire</Subtitle>
                </Column2>
                <Column3>
                    <Img src={avatar} />               
                </Column3>
                <Column4>   
                <Subtitle>I am an software engineer who constantly seeks out innovative solutions to everyday problems. I got some internships in software engineer, network administrator, and front-end web developer. Those experiences have taught me the full lifecycle development of a software product and quality assurance testing. I have strong design and integration skills as well as knowledge of Java, Javascript Python, and SQL. I am looking for an opportunity to contribute my professional knowledge and enhance my skills for further growth and betterment.</Subtitle>
                </Column4>                 
                <Column5>
                    <TextWrapper>
                        <TopLine >WORK EXPERIENCE</TopLine>
                        <Heading >Microsembly, Hudson, NH Systems Administrator Sep. 2020 – Present</Heading>
                            <Subtitle>- Maintenance and supports the company website.</Subtitle>
                            <Subtitle>- Performing IT systems administration and engineering.</Subtitle>                        
                            <Subtitle>- Performing full migration from Windows to Linux system.</Subtitle>
                            <Subtitle>- Implementing new technologies, with the support of dedicated engineers.</Subtitle>
                            <Subtitle>- Working with other team members for a complete IT department delivery.</Subtitle>

                        <Heading >Fidelity Investments, Merrimack, NH Software Engineer Jan. 2019 – Oct. 2019</Heading>
                            <Subtitle>- Completed Fidelity Investments’ training and development program.</Subtitle>
                            <Subtitle>- Worked with Angular to create a Single Page Application (SPA).</Subtitle>                        
                            <Subtitle>- Worked as part of Agile teams, using Jira and Confluence to manage tasks and projects.</Subtitle>
                            <Subtitle>- Contributed to all phases of the Agile Software development. Collaborated and followed up with the team members and vendors.</Subtitle>
                            <Subtitle>- Participated in creating and managing Microsoft Azure, Cloud software tools, Cloud Services, and Storages.</Subtitle>

                        <Heading >Microsembly, Hudson, NH Systems Administrator Sep. 2020 – Present</Heading>
                        <Subtitle>- Deploy and set up desktop computer systems.</Subtitle>
                        <Subtitle>- Maintain computers, projecters, printers and ensure computers and equipment, including monitors and printers, are in good condition.</Subtitle>                        
                        <Subtitle>- Install various software and hardware.</Subtitle>

                        <Heading >Unique System Skills LLC – October 2017 – May 2018: Web Development Intern</Heading>
                            <Subtitle>- Create website layout/user interface by using standard HTML/CSS/JavaScript practices and software development tools, integrate data from MySQL.</Subtitle>
                            <Subtitle>- Working closely with Design, Marketing, SEO, and Sales teams to ensure timely completion of tasks and website launches.</Subtitle>                        
                            <Subtitle>- Used effective ways of listening, communicating, and modeling to work individually and in groups with customers.</Subtitle>
                            <Subtitle>- Be responsible for maintaining, expanding, and scaling the website.</Subtitle>                       
                        
                        <TopLine >PROJECTS</TopLine>
                        <Heading >Single Page Application</Heading>
                            <Subtitle>Create single page applications with Angular to display customer data with Tableau, deploy it on AWS with Ansible.</Subtitle>
                        <Heading >Android applications</Heading>
                            <Subtitle>Created Whack a Mole, Lady bug, and multiple players card game.</Subtitle>
                        <Heading >API project with Python</Heading>
                            <Subtitle>Make a web application using Flask in Python 3 to receive and process data from an Azure SQL Database.</Subtitle>
                            
                    </TextWrapper>
                </Column5>

                <Column6>                                       
                    <TopLine >SKILLS</TopLine>
                        <Heading >Technical</Heading>
                            <Subtitle>JavaScript/Angular/React/Node.js</Subtitle>
                            <Subtitle>Python/Java/C++</Subtitle>
                            <Subtitle>HTML/CSS/GIT</Subtitle>
                            <Subtitle>MySQL/Perl/PHP</Subtitle>                                           
                            <Subtitle>Object-oriented design</Subtitle> 
                        <Heading >Professional</Heading>
                            <Subtitle>Effective communication</Subtitle>
                            <Subtitle>Team player</Subtitle>
                            <Subtitle>Strong problem solver</Subtitle>
                            <Subtitle>Good time management</Subtitle>
                    <TopLine >EDUCATION</TopLine>
                        <Heading >MS in Information Technology</Heading>
                            <Subtitle>Southern University of New Hampshire</Subtitle>
                            <Subtitle>(Expected Graduation: December 2022)</Subtitle>
                        <Heading >BS Computer Information Systems</Heading>
                            <Subtitle>University of New Hampshire</Subtitle>
                            <Subtitle>2015 - 2018; GPA 3.85</Subtitle>
                    <TopLine >INTERESTS</TopLine>
                    <Subtitle>Drawing</Subtitle>
                    <Subtitle>Reading</Subtitle> 
                    <Subtitle>Soccer</Subtitle>                   
                </Column6>               
               
            </ResumeWrapper>
        </ResumeContainer>
        </>
    )
}
export default Resume;
