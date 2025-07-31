document.addEventListener('DOMContentLoaded', function() {
    //Switching the tabs based on which button you've pressed on the main page
    const urlParams = new URLSearchParams(window.location.search);
    const tabValue = urlParams.get('tab');

    const switcher = document.querySelector('cds-content-switcher');
    const panels = document.querySelectorAll('.switcher-content');

    if (tabValue) {
        // Set the selected switcher tab
        switcher.setAttribute('value', tabValue);

        // Show the matching content panel
        panels.forEach(panel => {
        if (panel.dataset.value === tabValue) {
            panel.removeAttribute('hidden');
        } else {
            panel.setAttribute('hidden', '');
        }
        });
    }

    //When you manually switch the tabs
    switcher.addEventListener('cds-content-switcher-selected', function(e) {
        const selectedValue = e.target.value;

        panels.forEach(panel => {
        if (panel.dataset.value === selectedValue) {
            panel.removeAttribute('hidden');
        } else {
            panel.setAttribute('hidden', '');
        }
        });
    });

    //Clear the url after manually switching
    if (history.replaceState) {
        const cleanURL = window.location.origin + window.location.pathname;
        history.replaceState(null, '', cleanURL);
    }
});