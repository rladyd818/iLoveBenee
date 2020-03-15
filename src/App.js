import Home from './Home';


class App {
    data = null;
    $target = null;


    constructor($target) {
        this.$target = $target;
        console.log('createApp');

        this.home = new Home({
            $target,
            data: {
                title: "wellcom To HOME!!",
                onClick: ()=>{
                    alert('click first')
                }
            }
        })

        setTimeout(()=>{
            this.home.setState({
                    title:'changed Home',
                    onClick: ()=> {
                        alert('chnaged click!');
                    }
            });
        },2000)
        console.log('app Render');
    }

    render() {

    }
}

export default App;