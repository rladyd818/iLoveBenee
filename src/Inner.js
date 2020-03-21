import Header from './Header';
import Banner from './Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

class Inner {
    data = null;
    $inner = null;

    constructor({$target, data}) {
        // this.$inner = document.createElement('div');
        // this.$inner.className = 'inner';
        // $target.appendChild(this.$inner);
        this.$inner = $target.firstElementChild;
        console.log("inner의 target", $target)
        // this.render();
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

    // render() {
    //     this.$header.innerHTML = `<header id="header">
    //     <a href="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</a>
    //         <ul class="icons">
    //             <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
    //             <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
    //             <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
    //             <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
    //             <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
    //         </ul>
    //     </header>`
    // }
}

export default Inner;