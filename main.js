const multiply = (x, y) => { return x * y }

const app = new Vue({

    el: '#app',
    data: {
        field1: 0,
        field2: 0
    },
    computed: {
        multiplication: function () {
        const i = parseInt(this.field1)
        const j = parseInt(this.field2)
        return `Area: ${multiply(i, j)}`
        }
    }
})



