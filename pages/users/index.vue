<script setup lang="ts">
definePageMeta({ layout: "default" });
const columns = [{
  key: 'id',
  label: 'ID',
}, {
  key: 'name',
  label: 'Name',
  sortable: true,
}, {
  key: 'title',
  label: 'Title',
  sortable: true,
}, {
  key: 'email',
  label: 'Email',
  sortable: true,
}, {
  key: 'role',
  label: 'Role',
  sortable: true,
},
{
  key: 'actions'
}]

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]

const selectedColumns = ref([...columns])
const selected = ref([people[1]])
const page = ref(1)
const pageCount = 5
const q = ref('')
const isOpen = ref(false)

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const items = (row: any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }],
  [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    click: () => {
      console.log('Delete', row.id)
      isOpen.value = true
    }
  }]
]
</script>

<template>
  <div>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Confirm delete user
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <div class="flex justify-center items-center font-bold">
          Are you sure delete user?
        </div>

        <template #footer>
          <div class="flex items-center justify-end gap-2">
            <UButton color="gray" variant="ghost" class="-my-1" @click="isOpen = false">Close</UButton>
            <UButton color="primary" variant="solid" label="Delete" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UInput class="mr-1" v-model="q" placeholder="Filter people..." />
      <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
      <NuxtLink to="/users/create" class="ml-1">
        <UButton label="Create" color="primary" variant="solid" class="-my-1" />
      </NuxtLink>
    </div>
  </div>
  <UTable v-model="selected" :columns="selectedColumns" :rows="rows">
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
      </UDropdown>
    </template>
  </UTable>
  <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="people.length" />
  </div>
</template>

