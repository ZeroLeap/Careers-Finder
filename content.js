function findCareersUrl() {
    const careersUrl = Array.from(document.getElementsByTagName('a')).find((anchor) => {
        return (anchor.href && (anchor.href.includes('/careers') || anchor.href.includes('/jobs'))) || 
               (anchor.innerText.toLowerCase().includes('careers') || anchor.innerText.toLowerCase().includes('jobs') || anchor.innerText.toLowerCase().includes('jobs at ') || anchor.innerText.toLowerCase().includes('join our team') || anchor.innerText.toLowerCase().includes('join '));
    });

    if (careersUrl) {
        console.log('Found careers URL:', careersUrl.href);
        window.location.href = careersUrl.href;
    } else {
        console.log('No careers URL found');
        alert('Whoops! No careers page found here. Try another website for better results or visit Wavebound.io for job search assistance.');
    }
}

findCareersUrl();
