import SidebarInner from './SidebarInner';

class Sidebar {
    $sidebar = null;
    data = null;

    constructor({$target, data}) {
        this.$sidebar = document.createElement('div');
        this.$sidebar.id = 'sidebar';
        $target.appendChild(this.$sidebar);
        //console.log('sidebar의 target',$target);
        
        this.sidebarInner = new SidebarInner(
            this.$sidebar, {
            $target,
            data: {

            }
        })
    }
}

export default Sidebar;