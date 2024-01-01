function Greeting() {
    return <>
        <h2>Ki Yoon (Brian) Lee</h2>
        <div id="email">brian.ky.lee@outlook.com</div>
        <ul className="socials">
            <li>LinkedIn: https://www.linkedin.com/in/kiyoon-brian-lee</li>
            <li>GitHub: https://github.com/bkylee</li>
        </ul>
        <p>I am a passionate and skilled IT professional with over three years
            of experience in various IT roles. I have a BA in Information Technology
            from York University and an Azure Administrator Associate certification.
            I have pursued learning web development via The Odin Project, and am always looking learn new skills in the IT field. 
            Currently, am working on completing the Cloud Resume Challenge to boost my Azure skills. 
        </p>
        <div id="mainBody">
            <h3 className="mainTitles">Experience</h3>
            <ul id="experience">
                <li className="jobInfo">
                    <h4 className="jobTitleComp">Jr IT Administrator, Spirit of Math Schools Inc.</h4>
                    <p className="dateRange">January 2023 - Present</p>
                    <p className="desc">Work with senior network and security administrator to administrate O365, 
                    Windows 10 devices, and online services. Research and develop new solutions. Onboard, offboard, 
                    nd manage user accounts for over 200 employees using Azure Active Directory and Intune. Create 
                    SOP and other documentation for IT procedures. Tier 2 support for campus and HQ staff. 
                    </p>
                </li>
                <li className="jobInfo">
                    <h4 className="jobTitleComp">End User Support Specialist, Unity Health Toronto</h4>
                    <p className="dateRange">June 2020 - June 2022</p>
                    <p className="desc">Troubleshoot hardware and software issues for 10,000+ employees remotely 
                    and onsite. Mange ticketing system using ServiceNow. Reimage and upgrade hardware to Windows 10. 
                    Coordinate with project managers for deploying hardware and software. Document software installation 
                    and troubleshooting methods.
                    </p>
                </li>
            </ul>
            <h3 className="mainTitles">Education</h3>
            <ul id="education">
                <li>
                    <h4 className="jobTitleComp">Bachelor of Arts, Information Technology</h4>
                    <p className="dateRange">York University 2015-2019</p>
                </li>
            </ul>
            <h3 className="mainTitles">Certifications</h3>
            <ul>
                <li>Azure Administrator Associate Dec 2023 - Dec 2024</li>
            </ul>
        </div>   

    </>
}

export default Greeting;
