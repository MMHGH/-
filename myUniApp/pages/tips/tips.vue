<template>
	<view>
		<view class="view">
			<button class="mini-btn" type="primary" size="mini" @click="hand(1)">加载中</button>
		</view>
		<view class="view">
			<button class="mini-btn" type="default" size="mini" @click="hand(2)">加载结束</button>
		</view>
		<view class="view">
			<button class="mini-btn" type="warn" size="mini" @click="hand(3)">modal弹框</button>
		</view>
		<view class="view">
			<button class="mini-btn" type="warn" size="mini" @click="hand(4)">显示操作菜单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow() {
			uni.showToast({
			    title: '欢迎来到英雄联盟',
			    duration: 2000
			});
		},
		methods:{
			hand(type){
				switch(type){
					case 1:
					  uni.showLoading({
						  title: '加载中'
					  });
					  break;
				    case 2:
					  uni.hideLoading();
					  break;
					case 3:
					 uni.showModal({
					     title: '提示',
					     content: '这是一个模态弹窗',
					     success: function (res) {
					         if (res.confirm) {
					             console.log('用户点击确定');
					         } else if (res.cancel) {
					             console.log('用户点击取消');
					         }
					     }
					 });
					  break;
					case 4:
					 uni.showActionSheet({
					     itemList: ['A', 'B', 'C'],
					     success: function (res) {
					         console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					     },
					     fail: function (res) {
					         console.log(res.errMsg);
					     }
					 });
					  break;
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
