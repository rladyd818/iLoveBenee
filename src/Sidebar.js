import SidebarInner from './SidebarInner';

class Sidebar {
    $target = null;
    data = null;

    constructor($target, data) {
        this.$target = $target;
        this.data = data;
        //$target.appendChild(document.createElement('div').className = "inner");
        //console.log('sidebar의 target',$target);
        
        this.sidebarInner = new SidebarInner({
            $target,
            data: {

            }
        })
    }
}

export default Sidebar;