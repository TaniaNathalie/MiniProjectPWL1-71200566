<template>
    <div>
        <img src="../assets/Gigamac.png">
        <img src="../assets/CB.png">
        <img src="../assets/MacNaget.png">
        <div>
            <span><b>GigaMac</b></span>
            <span><b>ChisBurger</b></span>
            <span><b>MacNaget</b></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MakananView',
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
