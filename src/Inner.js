import Header from './Header';
import Banner from './Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

class Inner {
    data = null;
    $inner = null;

    constructor($main, {$target, data}) {
        this.$inner = document.createElement('div');
        this.$inner.className = 'inner';
        $main.appendChild(this.$inner);
        console.log('rendered Inner');

        this.header = new Header (
            this.$inner,{
            $target,
            data: {

            }
        })

        this.banner = new Banner (
            this.$inner, {
            $target,
            data: {

            }
        })

        this.sectionOne = new SectionOne(
            this.$inner, {
            $target,
            data: {

            }
        })

        this.sectionTwo = new SectionTwo(
            this.$inner, {
            $target,
            data: {

            }
        })
    }
}

export default Inner;