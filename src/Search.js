class Search {
    $search = null;
    data = null;

    constructor($sidebarInner,{$target, data}) {
        this.$search = document.createElement('section');
        this.$search.id = 'search';
        this.$search.className = 'alt';
        $sidebarInner.appendChild(this.$search);
        this.render();
        console.log('rendered Search');
    }

    render() {
        this.$search.innerHTML =`
        <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
        </form>`;
    }
}

export default Search;