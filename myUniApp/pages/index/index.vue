<template>
	<view class="uniApp">
		<view class="text-area">
			<text class="title">当前所在页面{{page}}</text>
		</view>
		<view class="content">
			<text v-for="(item,index) in list">{{item}}</text>
		</view>
		<view class="link-list">
			<button type="primary" size="mini" @click="goList('list')">跳转到列表页</button>
			<button class="mini-btn" type="warn" size="mini" @click="goList('tips')">跳转到消息页</button>
		</view>
		<view class="go-top" @click="goTop">返回顶部</view>
		<view>
			<toast :flag="flag"></toast>
		</view>
		<view>
			<text>转换后的时间:{{ date }}</text>
		</view>
		<view>
			<uni-grid :column="3">
			    <uni-grid-item>
			        <text class="text">文本</text>
			    </uni-grid-item>
			    <uni-grid-item>
			        <text class="text">文本</text>
			    </uni-grid-item>
			    <uni-grid-item>
			        <text class="text">文本</text>
			    </uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import Toast from '../../components/toast'
	import dateFormat  from '@/util/dateFormat.js'
	import { mapState,mapMutations,mapActions } from 'vuex'
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	
	export default {
		data() {
			return {
				title: '第一个项目',
				list:[1,2,3,4,5],
				flag:'父亲',
				date:''
			}
		},
		onLoad() {
		},
		components:{Toast,uniGrid,uniGridItem},
		onShow() {
			this.date = dateFormat.transTime(new Date().getTime());
			// 设置导航条加载动画
			uni.showNavigationBarLoading();
			setTimeout(function () {
			    uni.hideNavigationBarLoading()
			}, 2000);
			
			this.setPage('index');
			
			// 监听子组件传值
			uni.$on('update',(res)=>{
				console.info("done home 启动1",res)
			})
		},
		onReady() {
		},
		computed:{
			...mapState(['page'])
		},
		methods: {
			active(){
				alert(11)
			},
			...mapActions(['setPage']),
			goList(type){
				// 存储
				uni.setStorageSync('page', '首页进入');
				if(type == 'list'){
					uni.switchTab({
						url: '/pages/list/list'
					});	
				}else{
					uni.navigateTo({
						url:'/pages/tips/tips'
					})
				}
			},
			goTop(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 50
				});
			}
		}
	}
</script>

<style lang="scss">
	.uniApp{
		height:1500rpx;
			.text-area{
				display: flex;
				justify-content:center;
				padding:10rpx 0;
			}
			.content{
				text{
					width:20%;
					float:left;
					text-align: center;
				}
			}
			.link-list{
				text-align: center;
				button{
					margin:10px;
				}
			}
			.go-top{
				position: fixed;
				right:5rpx;
				bottom:150rpx;
				padding:5rpx;
				font-size: 12rpx;
				/* #ifdef MP-WEIXIN */
				   font-size: 28rpx;
				/* #endif */
				border:1rpx solid #ccc;
				border-radius: 20rpx;;
			}
		}
</style>
