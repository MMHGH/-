<template>
	<view>
		<text>当前所在页面{{page}}</text>
		<view class="button-sp-area">
			<button type="primary" plain="true" size="mini">返 回</button>
		</view>
	</view>
</template>

<script>
	import { mapState,mapMutations,mapActions } from 'vuex'
	export default {
		data() {
			return {
				title:'详情页'
			};
		},
		onLoad(option) {
			console.log('详情参数',option)
			console.log('页面参数',this.page)
		},
		onShow() {
			this.setPage('deteil');
			uni.showToast({
			    title: `${this.page}`,
			    duration: 2000
			});
		},
		computed:{
			...mapState(['page'])
		},
		created () {
		},
		methods:{
			...mapActions(['setPage'])
		}
	}
</script>

<style lang="scss">
 view{
	 text-align: center;
	 margin:10rpx;
 }
</style>
