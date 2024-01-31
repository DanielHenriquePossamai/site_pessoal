function toggleContent(element) {
    const content = element.querySelector('.hidden-content');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }

    const expandedSections = document.querySelectorAll('.expanded');
    expandedSections.forEach((section) => {
        if (section !== element) {
            section.classList.remove('expanded');
            section.querySelector('.hidden-content').style.display = 'none';
        }
    });

    element.classList.toggle('expanded');
}