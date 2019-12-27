<template>
	<view>
		<view class="view">
			<text>子组件</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['flag'],
		data() {
			return {
				
			};
		},
		created() {
			uni.showToast({
			    title: `来自父组件的值为${this.flag}`,
			    duration: 2000
			});
			uni.$emit('update',{msg:'页面更新'})
		}
	}
</script>

<style lang="scss">

</style>
