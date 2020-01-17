<template>
    <div>
        <h2>邓紫棋热歌</h2>
        <div v-for='(item,idx) in list' :key='idx'>
            <span v-text='idx+1'></span>
            <span v-text='item.album.name'></span>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
    computed:{
        ...mapState('song',['list'])
    },
    methods:{
        ...mapActions('song',['getSongList'])
    },
    mounted(){
        this.getSongList();
    }
}
</script>

<style lang="">
    
</style>