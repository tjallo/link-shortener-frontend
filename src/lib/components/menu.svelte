<script lang="ts">
	import { type MenuItem } from "$lib/types/component_types";

	const menuItems: Array<MenuItem> = [
		{
			title: "Login",
			href: "/login"
		}
	];
</script>

<ul class="list-none m-0 p-0">
	{#each menuItems as menuItem}
		<li class="mb-2">
			<a
				href={menuItem.href}
				class="text-blue-600 hover:text-blue-800 font-semibold no-underline hover:underline"
			>
				{menuItem.title}
			</a>
		</li>
	{/each}
</ul>
