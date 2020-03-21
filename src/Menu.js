class Menu {
    $menu = null;
    data = null;

    constructor($sidebarInner, {$target, data}) {
        this.$menu = document.createElement('nav');
        this.$menu.id = 'menu';
        $sidebarInner.appendChild(this.$menu);
        this.render();
        console.log('rendered Menu');
    }

    render() {
        this.$menu.innerHTML = `<header class="major">
        <h2>Menu</h2>
    </header>
    <ul>
        <li><a href="index.html">Homepage</a></li>
        <li><a href="generic.html">Generic</a></li>
        <li><a href="elements.html">Elements</a></li>
        <li>
            <span class="opener">Submenu</span>
            <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
            </ul>
        </li>
        <li><a href="#">Etiam Dolore</a></li>
        <li><a href="#">Adipiscing</a></li>
        <li>
            <span class="opener">Another Submenu</span>
            <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
            </ul>
        </li>
        <li><a href="#">Maximus Erat</a></li>
        <li><a href="#">Sapien Mauris</a></li>
        <li><a href="#">Amet Lacinia</a></li>
    </ul>`;
    }

}

export default Menu;