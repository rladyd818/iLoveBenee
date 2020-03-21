import Inner from './Inner';

class Main {
    data = null;
    $target = null;

    constructor($target) {
        this.$target = $target;
        console.log('create-main section');

        this.header = new Inner ({
            $target,
            data: {

            }
        })
    }
}

export default Main;