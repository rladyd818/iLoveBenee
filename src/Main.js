import Inner from './Inner';

class Main {
    data = null;
    $main = null;

    constructor({$target, data}) {
        this.$main = document.createElement('div');
        this.$main.id = 'main';
        $target.appendChild(this.$main);
        console.log('create-main section');

        this.inner = new Inner (
            this.$main, {
            $target,
            data: {

            }
        })
    }
}

export default Main;