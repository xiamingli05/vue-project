<template>
    <div class="detail">
        <h1>电影详情页 {{$route.params.id}}</h1>
        <span v-text='$route.params.id'></span>
        <span v-text='$route.params.time'></span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .detail h1{
        text-align: center;
        line-height: 36px;
        background: palegreen;
    }
    .detail span{
        text-align: center;
        line-height: 30px;
        background: #ccc;
        display: inline-block;
        width: 30%;
    }
</style>