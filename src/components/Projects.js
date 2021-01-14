import React, {useState, useEffect } from 'react';
import sanityClient from "../client.js";
import "./Projects.css";

export default function Projects() {

  const lightbox = document.getElementById('lightbox')
  const img = document.getElementById('img')

  function handleClick(e, index)  {
    lightbox.classList.add('active')
    const src = document.getElementById(index)
    img.src = src.src
  }

  function removeActive() {
    console.log('removed')
    lightbox.classList.remove('active')
  }

  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
        title, 
        slug, 
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setProject(data))
      .catch(console.error)
  })

  return (
    <main>
      <section>
        <div className="projectContainer">
          {projectData && 
            projectData.map((project, index) => (
              <article onClick={(e) => handleClick(e, index)} style={{cursor: 'pointer'}} >
                <span className="project-img">
                  <img 
                    id={index}
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                </span>
                <span className="project-title">
                  {project.title}
                </span>
              </article>
          ))}
          
        </div>
      </section>

      <div id="lightbox" onClick={removeActive}>
        <img id="img" alt="expanded" />
      </div>
      
    </main>
  )
}
