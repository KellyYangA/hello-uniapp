<template>
	<view>
		<div class="uni-searchbar">
			<div class="searchbar-box fx-1" @click="searchClick">
				<span class="icon-search c-placeholder">
					<uni-icons color="#999999" size="18" type="search" />
				</span>
				<span class="f-base c-placeholder m-l-24">搜索商家、商品名称</span>
			</div>
		</div>
		<scroll-view scroll-y="true">
			<ccSwiper :swiperList="info"></ccSwiper>
			<div class="m-t-24">
				<div class="bg-white nav">
					<div class="flex text-center">
						<div class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabs" :key="index"
						 @tap="tabSelect" :data-id="index">
							{{item.name}}
						</div>
					</div>
				</div>
				<div class="list">
					<div class="m-t-12" v-for="(item, idx) in 10" :key="idx">
						<foodListCard></foodListCard>
					</div>
				</div>
			</div>
		</scroll-view>
	</view>
</template>

<script>
	import foodListCard from './fragments/foodListCard.vue'
	export default {
		components: {foodListCard},
		data() {
			return {
				tabs: [{
					name: '综合排序',
					type: 'all'
				}, {
					name: '距离最近',
					type: 'close'
				}, {
					name: '品质联盟',
					type: 'purchase'
				}, {
					name: '筛选',
					type: 'select'
				}],
				info: [{
						url: 'https://s2.ax1x.com/2019/12/05/Q8WRpQ.jpg',
						type: 'image'
					},
					{
						url: 'https://s2.ax1x.com/2019/12/05/Q8WctS.jpg',
						type: 'image'
					},
					{
						url: "https://s2.ax1x.com/2019/12/05/Q8Wgfg.jpg",
						type: 'image'
					}
				],
				mode: 'round',
				current: 0,
				TabCur: 0
			}
		},
		computed: {},
		watch: {},
		onLoad() {

		},
		created() {},
		methods: {
			searchClick() {
				uni.navigateTo({
					url: 'search'
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style lang="scss" scoped>
	.uni-searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		padding: $uni-spacing-col-base;
		background-color: $uni-color-primary;
	}

	.searchbar-box {
		border-radius: 15px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 32px;
		border-width: 0.5px;
		border-style: solid;
		border-color: $uni-border-color;
		background-color: $uni-bg-color-grey;
	}

	.icon-search {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.nav .cu-item {
		height: 70rpx;
		display: inline-block;
		line-height: 70rpx;
		margin: 0 10rpx;
		padding: 0 20rpx;

	}
</style>
