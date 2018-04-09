new Vue({
    el:"#app",
    data:{
        name:"Emil",
        addhtmls:'<a href="http://www.google.com">Klicka</>',
        x: 0,
        y: 0,
        number:100
    },
    methods:{
        msg(){
            alert("hej");
            // return '<a href="http://www.google.com">Klicka</>';
        },
        updateXY(e){
            console.log(e)
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})