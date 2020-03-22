import Main from './Main';
import Sidebar from './Sidebar';

class Wrapper {
    $target = null;
    data = null;

    constructor($target) {
        this.$target = $target;
        //this.data = data;

        this.main = new Main ({
            $target,
            data: {

            }
        })

        this.sidebar = new Sidebar ({
            $target,
            data: {

            }
        })
    }
}

export default Wrapper;