$(document).ready(function() {
    $("#main_container_id").load(`./pages/page_0/page_0.html`);
    for (let i = 0; i < 5; i++) {
        $(`#page_${i}`).click(function() {
            $("#main_container_id").load(`./pages/page_${i}/page_${i}.html`);
            //loadPageScript(`./js/page_${i}.js`);
         });
    }
});