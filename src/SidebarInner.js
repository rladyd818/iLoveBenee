import Search from './Search';
import Menu from './Menu';
import SidebarSectionOne from './SidebarSectionOne';
import SidebarSectionTwo from './SidebarSectionTwo';
import Footer from './Footer';

class SidebarInner {
    $sidebarInner = null;
    data = null;

    constructor({$target, data}) {
        this.$sidebarInner = $target.firstElementChild;
        this.data = data;

        this.search = new Search (
            this.$sidebarInner, {
            $target,
            data: {

            }
        })

        this.menu = new Menu (
            this.$sidebarInner, {
            $target,
            data: {

            }
        })

        this.sidebarSectionOne = new SidebarSectionOne (
            this.$sidebarInner, {
            $target,
            data: {

            }
        })

        this.sidebarSectionTwo = new SidebarSectionTwo (
            this.$sidebarInner, {
            $target,
            data: {
                
            }
        })

        this.footer = new Footer (
            this.$sidebarInner, {
            $target,
            data: {

            }
        })
    }
}
export default SidebarInner;