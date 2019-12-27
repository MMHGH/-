<script>
	// import pageAnimation from './components/page-animation'
	export default {
		// mixins: [pageAnimation],
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			
			// 跨平台兼容语法
			//#ifdef H5
				// 显示右上角红点
				uni.showTabBarRedDot({
					index:0
				})
			//#endif
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.view{
		 margin:10rpx;
		 text-align: center;
	}
	
</style>
