<template>
    <div>
        <h1>这是films页面</h1>
        <div class="film-tabs">
            <router-link to="/films/playing" tag="span" active-class="on">正在热映</router-link>
            <router-link to="/films/commingsoon" tag="span" active-class="on">即将热映</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .film-tabs span{
        width: 50%;
        line-height : 46px;
        display: inline-block;
        text-align: center;
        background: #ccc;
        border: 1px solid palegreen;
        box-sizing: border-box;
        cursor: pointer;
    }
    .film-tabs span.on{
        background: palegoldenrod;
        color: white;
    }
</style>