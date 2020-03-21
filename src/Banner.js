class Banner {
    $banner = null;
    data = null

    constructor($inner,{$target, data}) {
        this.$banner = document.createElement("section");
        this.$banner.id = "banner";
        console.log(this.$banner);
        $inner.appendChild(this.$banner);
        console.log("create banner");
        this.render();
    }

    render() {
        this.$banner.innerHTML = `<div class="content">
            <header>
                <h1>Hi, I’m Editorial<br />
                by HTML5 UP</h1>
                <p>A free and fully responsive site template</p>
            </header>
            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
            <ul class="actions">
                <li><a href="#" class="button big">Learn More</a></li>
            </ul>
        </div>
        <span class="image object">
            <img src="images/pic10.jpg" alt="" />
        </span>`
    }
}

export default Banner;