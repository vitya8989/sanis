let detailTabsNavItem = document.querySelectorAll('.detail_tabs__nav_item');
let detailTabsBody = document.querySelectorAll('.detail_tabs__body');

for (let i = 0; i < detailTabsNavItem.length; i++) {
    detailTabsNavItem[i].onclick = () => {
        for (let j = 0; j < detailTabsBody.length; j++) {
            detailTabsNavItem[j].classList.remove('active_tab');
            detailTabsBody[j].classList.remove('active_tab');
            if (detailTabsNavItem[i].dataset.id === detailTabsBody[j].dataset.id) {
                detailTabsNavItem[i].classList.add('active_tab');
                detailTabsBody[j].classList.add('active_tab');
            }
        }
    }
}