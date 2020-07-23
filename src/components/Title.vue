<template>
    <div class="title">
        <h1>{{text}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        text: String
    }
}
</script>

<style scoped>
.title {
    position: absolute;
    left: 10%;
    width: 20%;
}
.title > h1 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 65px;
    display: flex;
    align-items: center;
    color: #001B36;
}
</style>