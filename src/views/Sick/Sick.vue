<template>
  <div class="flex h-screen">
    <div class="p-5 h-full w-[300px]">
      <Sidebar class="h-full" />
    </div>
    <div class="p-10 w-full h-full">
      <h2 class="text-4xl font-bold">Sick Date</h2>
      <div class="pt-6 w-full h-full overflow-y-scroll">
        <DataTable :value="products" paginator stripedRows :rows="10" :rowsPerPageOptions="[10, 20, 50]" resizableColumns columnResizeMode="fit" showGridlines>
          <Column field="id" header="id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="nik" header="Position"></Column>
          <Column field="division" header="Reason"></Column>
          <Column field="shift" header="Letter"></Column>
          <Column field="location" header="Status"></Column>
          <Column header="Operation">
            <template #body="{ data, index }">
              <div class="flex gap-x-5">
                <div class="px-2 flex gap-x-2 items-center justify-center cursor-pointer border rounded-xl hover:bg-blue-500/50" @click="console.log(data, index)">
                  <i class="pi pi-pencil"></i>
                  <p>Edit</p>
                </div>
                <div class="px-2 flex gap-x-2 items-center justify-center cursor-pointer border rounded-xl hover:bg-red-500/50">
                  <i class="pi pi-trash"></i>
                  <p>Delete</p>
                </div>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style>
.p-datatable-hoverable .p-datatable-selectable-row {
  cursor: auto;
}
</style>
