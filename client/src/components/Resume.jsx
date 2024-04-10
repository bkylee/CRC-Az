
function Resume() {

    const bio = <p>Skilled IT professional with over three years
        of experience in IT Support and administration. I have a BA in Information Technology
        from York University and an Azure Administrator Associate certification.
        I have pursued learning web development via The Odin Project, and am always looking to learn new skills in the IT field.
        Welcome to my Cloud Resume Challenge website. I&apos;ve created this site using React, Azure Blob Static Website, Terraform, and Github Actions. The Unique Vistior count API was created using Python and Azure ComsoDB.
    </p>;

    const mostRecentJob =
        <li className="jobInfo">
            <h4 className="jobTitleComp">Jr IT Administrator, Spirit of Math Schools Inc.</h4>
            <p className="dateRange">January 2023 - April 2024</p>
            <ul className="desc">
                <li>Manage Azure Entra accounts, exchange mailbox, licensing, and role access for over 200 staff.</li>
                <li>Manage deployment of 100+ devices using Intune.</li>
                <li>Define requirements and research cost-effective IT solutions for IT team and cross-functional teams</li>
                <li>Create asset management solution using Power Apps and SharePoint Lists.</li>
                <li>Create KPI tracking solution using SharePoint, Dynamics, and PowerBI.</li>
                <li>Create 20+ reports using PowerBI for business analytics.</li>
                <li>Train staff on new IT hardware and software solutions.</li>
                <li>Created 50+ documentation, diagrams, visuals for IT staff and end users.</li>
                <li>Monitor logs and alerts from Microsoft Defender and other SaaS products</li>
            </ul>
        </li>;
    const previousJob =
        <li className="jobInfo">
            <h4 className="jobTitleComp">End User Support Specialist, Unity Health Toronto</h4>
            <p className="dateRange">June 2020 - June 2022</p>
             <ul className="desc">
                <li>Lead Windows 10 migration project in St. Michael’s Hospital</li>
                <li>Gathering software and hardware requirements from department heads.</li>
                <li>Upgraded/replaced over 300 Windows 7 devices to Windows 10.</li>
                <li>Troubleshoot hardware and software issues for over 10,000 staff across Toronto</li>
                <li>Manage ticket distribution using ServiceNOW</li>
                <li>Manage software deployment using SCCM</li>
            </ul>
        </li>;


    return <>
        <h2>Ki Yoon (Brian) Lee</h2>
        <div id="email">brian.ky.lee@outlook.com</div>
        <ul className="socials">
            <li>LinkedIn: https://www.linkedin.com/in/kiyoon-brian-lee</li>
            <li>GitHub: https://github.com/bkylee</li>
        </ul>
        {bio}
        <div id="mainBody">
            <h3 className="mainTitles">Experience</h3>
            <ul id="experience">
                { mostRecentJob }
                {previousJob}
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
export default Resume;
