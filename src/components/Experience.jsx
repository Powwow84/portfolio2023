export default function Experience() {
    return(
        <div className="pageContainer">
            <div className='projectContainer'>
                <div className='xpbox'>
                <div>
                    <p className='experienceTitle'>Technical Experience</p>
                    <ul>
                        <li className="experienceP"><span class='pspan'>Programming Languages:</span> JavaScript, Typescript, Python, Golang</li>
                        <li className="experienceP"><span class='pspan'>Web Development:</span> Node.js, React, Express, Three.js, Cannon.es, Sequelize, HTML5, CSS</li>
                        <li className="experienceP"><span class='pspan'>Game Development:</span> Unity</li>
                        <li className="experienceP"><span class='pspan'>Database:</span> SQL, PostgreSQL, MongoDB</li>
                        <li className="experienceP"><span class='pspan'>Version Control:</span> Git</li>
                        <li className="experienceP"><span class='pspan'>Containers & Orchestration:</span> Docker, Kubernetes</li>
                        <li className="experienceP"><span class='pspan'> Cloud Providers:</span> AWS, Google Cloud, Azure</li>
                        <li className="experienceP"><span class='pspan'>Monitoring and Visualization:</span> Prometheus, Grafana, Splunk</li>
                        <li className="experienceP"><span class='pspan'>CI/CD & Automation Tools:</span> Jenkins, Ansible, Terraform</li>
                        <li className="experienceP"><span class='pspan'>Collaboration Tools:</span> Jira, Confluence, Notion, Figma</li>
                    </ul>
                </div>
                <div>
                    <p className='experienceTitle'>Professional Experience</p>
                    <ul>
                        <li className="experienceP"><span class='pspan'>Stealth Startup:</span> San Francisco, CA 2023 - Present
                        <p className='jobTitle'>QA Engineer</p>
                        <ul className='jobTitle'>
                            <li>Implemented QA Infrastructure and Automation:</li>
                            <ul>
                                <li>Developed test plans from minimal documentation, covering the entire front-end user flow and
                                back-end process.</li>
                                <li>Automated webpage UI test flows using Selenium, eliminating the need for dedicated manpower
                                in those test scenarios</li>
                                <li>Identified, reproduced, and analyzed bugs through both manual and automated testing methods.</li>
                                <li>Conducted regular regression testing to ensure software quality and functionality.</li>
                            </ul>
                        </ul>
                        </li>
                        <li className="experienceP"><span class='pspan'>Sessions</span> San Francisco, CA | 2021 - 2023
                        <p className='jobTitle'>SR. Manager Quality Assurance, Support, and Community Operations</p>
                        <ul className='jobTitle'>
                            <li className='jobTitle'>50/50 hands-on management of Quality Assurance and Support teams in daily operations - supporting over 130K Artists and 1.7M Fans.</li>
                            <li className='jobTitle'>Improved agent efficiency and user satisfaction by developing new strategies and researching new tools.</li>
                            <ul className='jobTitle'>
                                <li>Zendesk process automation, which lowered response times and increased workload capacity
                                while lowering the number of tickets entering agent queues</li>
                                <li>Automated ticketing workflows and routing</li>
                                <li>Designed and incorporated ticketing auto-response</li>
                                <li>Incorporated chatbots</li>
                                <li>Included social media integrations</li>
                                <li>Team and individual performance analysis through dashboards and Zendesk data</li>
                            </ul>
                            <li className='jobTitle'>Designed/Used Sigma tables for user/artists/event analysis, resulting in higher artist retention and the identification of multiple exploits that caused monetary losses. Sigma tables were used to:</li>
                            <ul className='jobTitle'>
                                <li>Track artists and user onboarding flow and retention</li>
                                <li>Artists and fan participation</li>
                                <li>Donations and wallet activity</li>
                                <li>Artist drop-off and determine possible causes</li>
                                <li>Research and identify exploits</li>
                                <li>Rebalance user events and incentives to promote fairness and participation</li>
                            </ul>
                            <li className='jobTitle'>Designed onboarding flows and educational email campaigns through Customer.io, which facilitated a 25% increase in the number of artists onboarded onto the platform:</li>
                            <ul className='jobTitle'>
                                <li>Ran a/b tests with different versions of campaigns against subsets of users to find factors that could contribute to higher conversion and retention of artists</li>
                                <li>Used customer.io dashboard to track email campaign metrics to identify strengths and weaknesses in email campaigns</li>
                                <li>Reviewed campaign data in conjunction with support data to identify bugs within email campaigns and automated campaign functions (wrong times/dates, recipients, incentives)</li>
                                <li>Iterated on campaigns based on the above data to increase clickthrough rates</li>
                            </ul>
                        </ul>
                        </li>
                        <li className="experienceP"><span class='pspan'>WRKSHP Games</span> San Francisco, CA | 2014 - 2021
                        <p className='jobTitle'>SR Quality Assurance Manager</p>
                        <ul>
                            <li className='jobTitle'>Built and led a team of over 30 in-house and remote QA analysts, overseeing all aspects of management - including hiring, performance reviews, career development, training, and daily guidance through a hands-on approach.</li>
                            <li className='jobTitle'>Trained teams of analysts, resulting in improved efficiency and lowered development costs:</li>
                            <ul className='jobTitle'>
                                <li>OBS, Charles Proxy, Crossbrowser.com, Jira, Confluence, Figma, Notion, Testflight, VPNs,
                                IOS/Android/Kindle device systems</li>
                                <li>Designing and running test plans for various use cases, devices, and environments</li>
                                <li>Bug reproduction strategies based on analysis of user reports</li>
                                <li>Incorporated bug reporting best practices such as finding the root cause of the issue rather than
                                describing the symptom</li>
                            </ul>
                            <li className='jobTitle'>Reviewed analyst efficiency and productivity to improve team and individual output:</li>
                            <ul className='jobTitle'>
                                <li>Utilized Jira dashboards to review analyst statistics, which included bugs opened, re-opened,
                                closed, and regressions</li>
                                <li>Analyzed sampled tickets and collaborated with the dev team to identify gaps and failures in the
                                bug submission process</li>
                                <li>Coached analysts and improved processes based on data</li>
                                <li>Ensured tickets to dev included correct information, logs, and reproduction steps, while also
                                mitigating the number of duplicate bugs being reported</li>
                            </ul>
                            <li className='jobTitle'>Oversaw live ops tracking and response:</li>
                            <ul className='jobTitle'>
                                <li>Reviewed and translated user reports into actionable items such as bugs, feedback, and
                                suggestions</li>
                                <li>Bug reproduction/tracking/ testing and deployment of resolutions to production environments,
                                which helped to shorten downtimes and limit the number of users affected</li>
                            </ul>
                        </ul>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}