import * as projects from '../assets'

export default function Project({ project }) {
    const {
        title,
        image,
        link,
        githubLink
    } = project
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className='image-container'>
            <img src={projects[image]} />
            </div>
            <a href={link} className='link'>{link}</a>
            <a href={githubLink} className='link'>{githubLink}</a>
        </div>

    )
}