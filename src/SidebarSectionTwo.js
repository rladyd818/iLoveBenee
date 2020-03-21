class SidebarSectionOne {
    $sideSectionOne = null;
    data = null;

    constructor($sidebarInner, {$target, data}) {
        this.$sideSectionOne = document.createElement('section');
        $sidebarInner.appendChild(this.$sideSectionOne);
        this.render();
        console.log('rendered SidebarSection 2');
    }

    render() {
        this.$sideSectionOne.innerHTML = `<header class="major">
        <h2>Get in touch</h2>
    </header>
    <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
    <ul class="contact">
        <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
        <li class="icon solid fa-phone">(000) 000-0000</li>
        <li class="icon solid fa-home">1234 Somewhere Road #8254<br />
        Nashville, TN 00000-0000</li>
    </ul>`;
    }
}

export default SidebarSectionOne;