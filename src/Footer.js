class Footer {
    $footer = null;
    data = null;

    constructor($sidebarInner, {$target, data}) {
        this.$footer = document.createElement('footer');
        this.$footer.id = 'footer';
        $sidebarInner.appendChild(this.$footer);
        this.render();
        console.log('rendered Footer');
    }

    render() {
        this.$footer.innerHTML = `<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>`;
    }
}

export default Footer;