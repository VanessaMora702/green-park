<template>
    <div class="error">
    <h2>404</h2>
    <h2>The page you're looking for can't be found.</h2>
    </div>
</template>

<script>
export default {
    name: 'error'
}
</script>

<style>
.error {
    display: flex;
    justify-content: center;
    color: red;
    background: black;
    height: 100vh;
    font-size: 40px;
}
</style>