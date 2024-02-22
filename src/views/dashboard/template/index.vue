<template>
  <div class="w-full h-full p-[10px]">
    <!-- header -->
    <div class="block justify-between page-header md:flex">
      <div>
        <h3
          class="text-gray-700 text-left hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium"
        >
          Tables
        </h3>
      </div>
      <ol class="flex items-center whitespace-nowrap min-w-0">
        <li class="text-sm">
          <a
            class="flex items-center font-semibold text-blue-500 hover:text-primary dark:text-primary truncate"
          >
            Basic Ui
            <span> / </span>
          </a>
        </li>
        <li
          class="text-sm text-gray-500 hover:text-primary dark:text-white/70"
          aria-current="page"
        >
          Tables
        </li>
      </ol>
    </div>

    <!-- Table -->

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12">
        <div class="box text-black">
          <div class="box-body p-0">
            <div class="table-bordered rounded-sm overflow-auto">
              <table class="ti-custom-table ti-custom-table-head">
                <thead>
                  <tr>
                    <th
                      v-for="(value, index) in header"
                      :key="index"
                      scope="col"
                    >
                      {{ value }}
                    </th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col" class="!text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>

                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="font-medium">John Brown</td>
                    <td>45</td>
                    <td>New York No. 1 Lake Park</td>
                    <td class="font-medium !text-center">
                      <a class="text-primary hover:text-primary">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              class="flex items-center h-full flex-column flex-wrap md:flex-row md:justify-between justify-center pt-4"
              aria-label="Table navigation"
            >
              <span
                class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
                >Showing
                <span class="font-semibold text-gray-900 dark:text-white"
                  >19-50</span
                >
                of
                <span class="font-semibold text-gray-900 dark:text-white"
                  >10000</span
                ></span
              >

              <ul
                class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-3"
              >
                <li>
                  <select
                    class="option-page"
                    aria-label="Page Size"
                    title="Page Size"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >Previous</a
                  >
                </li>

                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1</a
                  >
                </li>
                <li>
                  <a
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >...</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >Next</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-view",

  data() {
    return {
      header: ["Name", "Age", "Address", "Action"],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
// Header

.page-header {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

// Table
.box {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-shadow: 0 0.75rem 1.5rem rgba(15, 23, 42, 0.03);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0.75rem 1.5rem var(--tw-shadow-color);
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0.75rem 1.5rem rgba(15, 23, 42, 0.03);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.box-header {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 500;
}

.box-title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}
.ti-custom-table {
  min-width: 100%;
}

.ti-custom-table th {
  --tw-bg-opacity: 1;
  background-color: #374151;
  color: #ffffff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: start;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}
.ti-custom-table-head > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  --tw-divide-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-divide-opacity));
}
.ti-custom-table td {
  white-space: nowrap;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
}
.ti-custom-table tbody tr:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.option-page {
  border-radius: 10px !important;
  line-height: 1rem !important;
}
</style>
