import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className='pageContainer'>
            <div className='imageContainer'>
                <div className="arrowBox1"></div>
                <Link to='/about'><div className="photoBox"></div></Link>
                <div className="arrowBox2"></div>
            </div>
            <div className='titleContainer'>
                    <p className='textBox1'>Pao Saelee</p>
                    <p className='textBox2'>Software Developer</p>
                <div className='buttonBox'>
                    <Link to='/projects' className='actionButton1'></Link>
                    <Link to='contact' className='actionButton2'></Link>
                </div>
            </div>
        </div>
    )
}