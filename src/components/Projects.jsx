import { Link } from "react-router-dom"

export default function Projects() {
    
    return(
        <div className='pageContainer2'>
            <div></div>
            <div className='projectContainer'>
                <div className='projects'>
                    <Link to='https://powwow84.github.io/project-1/' target='blank'><div className='projectImage project1'></div></Link>
                    <div className='title'>RUNNER</div>
                    <div className='projectText'>Want to play a game?... Runner is a horror survival game where you have to beat the clock and find the exit. Along the way you will find traps and bonus's that will either help you or stop you in your tracks. This game is built with Javascript and Canvas 2d</div>
                </div>
                <div className='projects'>
                    <Link to='https://runner-3d.vercel.app/' target='blank'><div className='projectImage project2'></div></Link>
                    <div className='title'>RUNNER 3D</div>
                    <div className='projectText'>Runner 3D is a remmake of my first project Runner. I really enjoy developing games and when I had the opportunity to make another I decided to make it 3D. This project was built in 4 days after spending 3 days teaching myself how to use the Three.js library.</div>
                </div>
                <div className='projects'>
                    <Link to='https://asteroid-destroyer.vercel.app/' target='blank'><div className='projectImage project3'></div></Link>
                    <div className='title'>Asteroid Destroyer</div>
                    <div className='projectText'>If you have 60 seconds you have time to play Asteroid Destroyer. Built with THREE.js, Cannon.es and GSAP. Spend 60 seconds shooting asteroids in a 3D space!</div>
                </div>
                <div className='projects'>
                    <Link to='https://national-parks-explorer.netlify.app/' target='blank'><div className='projectImage project4'></div></Link>
                    <div className='title'>NPS Explorer</div>
                    <div className='projectText'>Love the outdoors? Check out the NPS explorer app. It'll help you find parks in your state and bt the activities you want to do. Save parks you want to visit and log memories of those experiences. Built with a React, Express, Axios, and MongoDB. </div>
                </div>
                <div className='projects'>
                    <Link to='https://finda.herokuapp.com/catches/all' target='blank'><div className='projectImage project5'></div></Link>
                    <div className='title'>Finda</div>
                    <div className='projectText'>Finda is a social media app for people who love to fish. You can save your experiences, share your catches, and add your dream fish to your bucketlist. Built with Node.js, EJS, Express, Postgress, and Sequelize. </div>
                </div>
            </div>
        </div>
    )
}