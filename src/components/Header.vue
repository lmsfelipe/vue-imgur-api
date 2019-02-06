<template>
	<div class="ui secondary pointing menu">
		<router-link to="/" class="active item">
			Image storage
		</router-link>
		<div class="right menu">
			<a v-if="!isLoggedIn" href="#" class="ui item" @click="login">
				Login
			</a>

			<div v-else class="horizontal">
				<router-link to="/" class="item">Galleries</router-link>
				<router-link to="/upload" class="item">Upload</router-link>
				<a class="item" @click="logout">Logout</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Header',
	computed: mapGetters(['isLoggedIn']),
	methods: {
		...mapActions(['login']),
		...mapActions(['logout'])
	}
}
</script>

<style scoped>
.horizontal {
	display: flex;
	flex-direction: row;

}
</style>
