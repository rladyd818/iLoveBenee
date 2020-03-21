class Header {
    $header = null;
    data = null;

    constructor($inner, {$target, data}) {
        this.$header = document.createElement('header');
        this.$header.id = 'header';
        $inner.appendChild(this.$header);
        console.log('rendered Header');

        this.render();
    }

    render() {
        this.$header.innerHTML = `<a href="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</a>
        <ul class="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">SIGN UP</a></li>
        </ul>`;

    }
}

export default Header;