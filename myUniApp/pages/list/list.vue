<template>
	<view class="list">
		<view class="scroll-body">
			<!-- <view class="list-title">当前所在页面{{page}}</view> -->
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
				<!-- <view> @down, @up 必须配置 </view> -->
				<!-- <view> :down, :up 可省略 </view> -->
				<view class="item" v-for="item in dataList">{{item.content}}</view>
			</mescroll-uni>
		</view>
		<view>
			<button type="primary" size="mini" @click="goDetail">跳转到详情页</button>
		</view>
	</view>
</template>

<script>
	import MescrollUni from "mescroll-uni"; // npm安装的引入方式
	import { mapState,mapMutations,mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				title:'列表页',
				// 下拉刷新的常用配置
				downOption: { 
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				// 列表数据
				dataList: []
			};
		},
		onLoad() {
			console.log(33,uni.getStorageSync('page'))
		},
		components: {
			MescrollUni
		},
		onShow() {
			this.setPage('list');
			// 动态设置tabBar
			if(this.page == 'list'){
				uni.setTabBarItem({
				  index: 1,
				  text: '商品',
				  iconPath: 'static/image/list_icon.png',
				  selectedIconPath: 'static/image/list_icon.png'
				})
			}
			uni.$on('update',function(data){
				console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
			})
		},
		computed:{
			...mapState(['page'])
		},
		methods:{
			...mapActions(['setPage']),
			/*下拉刷新的回调, 有三种处理方式: */
			downCallback(mescroll){
				// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
				mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				// 此时mescroll会携带page的参数:
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = mescroll.size; // 页长, 默认每页10条
				uni.request({
					url: `http://api.cenggel.com/api/message/list/${pageNum}/${pageSize}?key=2019110409`,
					//  data: {
					// 	pageNum: pageNum,
					// 	pageSize: pageSize
					// },
					// dataType: 'json',
					// method:"POST",
					header:{
						// content-type: 'application/json;charset=utf-8'
						// 'content-Type': 'application/json;charset=UTF-8',
						// 'Authorization' : 'Bearer fcc627fc805c079d23a548704d2f7c19'
					},
					success: (data) => {
						if(data.statusCode == 200){
							let res = data.data.data;
							// 接口返回的当前页数据列表 (数组)
							let curPageData = res.content; 
							// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
							let totalPage = 5; 
							// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
							let totalSize = data.total; 
							//设置列表数据
							if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
							this.dataList = this.dataList.concat(curPageData); //追加新数据
							
							// 成功隐藏下拉加载状态
							//方法一(推荐): 后台接口有返回列表的总页数 totalPage
							mescroll.endByPage(curPageData.length, totalPage); 
						}else{
							mescroll.endErr()
						}
					},
					fail: () => {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
					}
				})
			},
			goDetail(){
				this.setPage('deteil');
				uni.navigateTo({
				    url: '/pages/list/detail/detail?id=1'
				});
			}
		}
	}
</script>

<style lang="scss">
.list{
	text-align: center;
	.scroll-body{
		margin-top:20rpx;
		.item{
			min-height: 200rpx;
			border:1rpx solid red;
			padding:10rpx;
		}
	}
}
</style>
