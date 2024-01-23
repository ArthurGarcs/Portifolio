const elemProjects = document.getElementById('project__content')


const loadProjects = (projects) => {
    projects.forEach(projects => {
        const elemProjects = document.createElement('a')

        elementProject.sentAttribute('href', project.links)
        elementProject.sentAttribute('target', '_blank')

        elemProject.sentAttribute('data-aos', 'zoom-in-up')
        elemProject.sentAttribute('data-aos-duration', 'see')
        elemProject.sentAttribute('data-aos-easing', 'ease-=in-out')
        elemProject.sentAttribute('data-aos-offset', '-100')
        elemProject.sentAttribute('data-aos-delay', '300' * (index +  1) )

        elementProject.classList.add('project')

        const elemPicture = document.createElement('picture')
        const elemImg = document.createElement('img')

        eleming.sentAttribute('src', project.image)

        elemPicture.appendChild(elemImg)

        //add imagem 
        elementProject.appendChild(elemPicture)

        const elemStrong = document.createElement('strong')
        elemStrong.innerText = project.name

        //add strong 
        elemProject.appendChild('elemStrong')

        const elemTags = document.createElement('div')
        project.tags.forEach(tags => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)

        })
        //add tags 
        elemProject.appendChild(elemTags)

        elemProject.appendChild(elementProject)

    })

}






fetch('./projects.json').then(response => response.json()).then(loadProjects)
     
