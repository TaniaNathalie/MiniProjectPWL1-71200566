<template>
    <div>
        <img src="../assets/pepsi_1.png">
        <img src="../assets/cola.png">
        <img src="../assets/sprite_1.png">
        <div>
            <span><b>Pepsi</b></span>
            <span><b>CocaCola</b></span>
            <span><b>Sprite</b></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MinumanView',
    data(){
        return {
            nama: ''
        }
    },
    methods:{
        simpan(){
            this.$store.commit('add',this.nama);
            this.nama = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
