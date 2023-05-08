<template>
	<div class="about">
		<div>about</div>
		<div>{{ count }}</div>
		<button @click="addCount">增加</button>
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
