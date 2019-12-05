<template>
	<scroll-view scroll-y="true">
		<uni-search-bar ref="search" placeholder="请输入" @confirm="search" @input="input" />
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
						<image style="width: 100%; background-color: #eeeeee;" mode="aspectFill" :src="item.src">
						</image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
						src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"
					},
					{
						src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"
					},
					{
						src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"
					}
				],
				mode: 'round',
				current: 0
			}
		},
		computed: {
			show() {
				return this.$refs.search.show
			}
		},
		watch: {
			"$refs.search.show"(val) {
				console.log(val)
			}
		},
		onLoad() {

		},
		created() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			search(e) {
				console.log(e)

			},
			input() {

			}
		}
	}
</script>

<style>
</style>
