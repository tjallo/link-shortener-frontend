<script lang="ts">
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	type Link = {
		ID: number;
		CreatedAt: string;
		UpdatedAt: string;
		DeletedAt: string;
		OriginalLink: string;
		ShortLink: string;
	};
</script>

<main>
	<!-- +page.svelte is rendered in this <slot> -->
	<slot />
</main>

<aside class="bg-gray-100 p-4">
	<h2 class="text-lg font-semibold mb-2">More posts</h2>
	<div class="overflow-x-auto">
		<table class="table-auto w-full border-collapse">
			<thead>
				<tr class="bg-gray-200">
					<th class="px-4 py-2">#</th>
					<th class="px-4 py-2">Created At</th>
					<th class="px-4 py-2">Updated At</th>
					<th class="px-4 py-2">Deleted At</th>
					<th class="px-4 py-2">Original Link</th>
					<th class="px-4 py-2">Short Link</th>
				</tr>
			</thead>
			<tbody>
				{#each data.allLinks as link}
					<tr class="border-b hover:bg-gray-50">
						<td class="px-4 py-2">{link.ID}</td>
						<td class="px-4 py-2">{link.CreatedAt}</td>
						<td class="px-4 py-2">{link.UpdatedAt}</td>
						<td class="px-4 py-2">{link.DeletedAt}</td>
						<td class="px-4 py-2">{link.OriginalLink}</td>
						<td class="px-4 py-2">{link.ShortLink}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</aside>
