new Vue({
    el:"#app",
    data:{
        name:"Emil",
        addhtmls:'<a href="http://www.google.com">Klicka</>'
    },
    methods:{
        msg(){
            alert("hej");
            // return '<a href="http://www.google.com">Klicka</>';
        }
    }
})