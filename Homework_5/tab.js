// fungsi mengganti tab
function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    });
}
