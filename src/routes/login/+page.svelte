<form method="POST" class="max-w-md mx-auto">
	<div class="mb-4">
		<label for="username" class="block text-gray-700">Username</label>
		<input
			type="text"
			id="username"
			name="username"
			class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
			placeholder="Enter your username"
			required
		/>
	</div>
	<div class="mb-4">
		<label for="password" class="block text-gray-700">Password</label>
		<input
			type="password"
			id="password"
			name="password"
			class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
			placeholder="Enter your password"
			required
		/>
	</div>
	<button
		type="submit"
		class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
		>Login</button
	>
</form>
