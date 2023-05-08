<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const count = ref(0)
	const addCount = () => {
		count.value++
	}
</script>

<style lang="scss" scoped></style>
