document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('videoSearch');
    const videos = document.querySelectorAll('.video');
    const mainVideo = document.getElementById('mainVideo');
    const panels = document.querySelectorAll('.cds-ce-demo-devenv--tab-panels > div');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        if (query) {
            mainVideo.style.display = 'none';
            panels.forEach(panel => panel.removeAttribute('hidden'));
        } else {
            mainVideo.style.display = 'flex';
            panels.forEach((panel, index) => {
                if (index !== 0) panel.setAttribute('hidden', '');
            });
        }
        videos.forEach(video => {
            const title = video.dataset.title || "";
            const match = title.includes(query);
            video.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
        });
     });
});