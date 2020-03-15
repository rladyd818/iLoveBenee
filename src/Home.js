

class Home {
    data = null;
    $Home = null;
    onClick = null;

    constructor({$target,data}) {
        console.log('create Home');
        this.$Home = document.createElement('div');
        this.$Home.className = 'Home';


        $target.appendChild(this.$Home);
        this.setState(data);
        console.log('rendered Home');
    }

    render() {
        const { title } = this.data;

        this.$Home.innerHTML = `<p>${title}</p>
        <button>Click</button>
        `

        this.$Home.querySelector('button').onclick = this.data.onClick;
    }

    setState(data) {
        this.data = data;

        this.render();
    }
}

export default Home;