<template>
  <aside
    v-show="isScream"
    id="sidebar-multi-level-sidebar"
    class="sidebar w-64 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-800"
  >
    <div class="sidebar-header flex items-center justify-center py-4">
      <div class="inline-flex">
        <a href="#" class="inline-flex flex-row items-center">
          <img src="../../assets/icon_svg/app_icon.svg" alt="" srcset="" />
        </a>
      </div>
    </div>

    <div class="sidebar-content h-[calc(100vh-50px)] py-[20px]">
      <div
        class="flex flex-col justify-between h-full px-[10px] space-y-[10px]"
      >
        <ul class="flex flex-col w-full">
          <!-- Dashboard -->

          <li class="my-px" v-if="roleAdmin === 'admin'">
            <div
              @click="onClickRouterDashboard('Dashboard')"
              :class="{
                'bg-gray-100 text-gray-700': activeTab === 'Dashboard',
              }"
              class="inline-flex relative items-center px-[10px] py-[10px] w-full text-base font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-700 transition duration-400 ease-in-out"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <img
                  class="mr-2 w-[20px] h-[20px] fill-current"
                  src="../../assets/icon_svg/ic_dashboard.svg"
                  alt=""
                />
              </span>

              <span class="ml-3">Dashboard</span>
            </div>
          </li>

          <!-- Manager account -->

          <li
            class="my-px"
            v-if="roleAdmin === 'reporter' || roleAdmin === 'admin'"
          >
            <button class="flex items-center justify-between w-full">
              <span
                class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
                >Manager account</span
              >
            </button>

            <div class="overflow-hidden">
              <ul id="dropdown-example" class="py-2 space-y-2 pl-3">
                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Account',
                    }"
                    @click="onClickRouterAccount('Account')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">List account admin </span>
                  </a>
                </li>

                <!-- <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Template',
                    }"
                    @click="onClickRouterTemPlate('Template')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">List Template </span>
                  </a>
                </li> -->
              </ul>
            </div>
          </li>

          <!-- Manager customer -->

          <li class="my-px">
            <button class="flex items-center justify-between w-full">
              <span
                class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
                >Manager customer</span
              >
            </button>

            <div class="overflow-hidden">
              <ul id="dropdown-example" class="py-2 space-y-2 pl-3">
                <li class="my-px">
                  <a
                    @click="onClickRouterUser('Customer')"
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Customer',
                    }"
                    class="active: flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">List customer </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    @click="onClickRouterBrowse('Avatar')"
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Avatar',
                    }"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">CMS Avatar </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <!-- Reports activity -->

          <li class="my-px">
            <button
              class="flex items-center justify-between w-full px-4 my-4"
              @click.prevent="
                selected = selected === 'Dashboard' ? '' : 'Dashboard'
              "
            >
              <span class="flex font-medium text-sm text-gray-300 uppercase"
                >Reports activity</span
              >

              <svg
                class="w-3 h-3"
                :class="{ 'rotate-180': selected === 'Dashboard' }"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              class="overflow-hidden"
              :class="selected === 'Dashboard' ? 'block' : 'hidden'"
            >
              <ul id="dropdown-example" class="py-2 space-y-2 pl-3">
                <li class="my-px">
                  <a
                    @click="onClickRouterActivities('Activity')"
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Activity',
                    }"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Activity </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    @click="onClickRouterReport('Report')"
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Report',
                    }"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Reports </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <!-- Manager profile -->

          <li class="my-px">
            <button
              class="flex items-center justify-between w-full px-4 my-4"
              @click.prevent="
                selected = selected === 'Dashboards' ? '' : 'Dashboards'
              "
            >
              <span class="flex font-medium text-sm text-gray-300 uppercase"
                >Manager profile</span
              >

              <svg
                class="w-3 h-3"
                :class="{ 'rotate-180': selected === 'Dashboards' }"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              class="overflow-hidden"
              :class="selected === 'Dashboards' ? 'block' : 'hidden'"
            >
              <ul id="dropdown-example" class="py-2 space-y-2 pl-3">
                <li class="my-px">
                  <a
                    @click="onClickRouterInterest('Interest')"
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Interest',
                    }"
                    class="flex flex-row items-center cursor-pointer h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Interest </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Sexual',
                    }"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <button
                      @click="onClickRouterSexual('Sexual')"
                      class="flex flex-row items-center"
                    >
                      <span
                        class="flex items-center justify-center text-lg text-gray-400"
                      >
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                      </span>

                      <span class="ml-3">Orientation Sexual </span>
                    </button>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Genders',
                    }"
                    @click="onClickRouterGender('Genders')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Genders </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Schools',
                    }"
                    @click="onClickRouterSchool('Schools')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Schools </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Languages',
                    }"
                    @click="onClickRouterLanguage('Languages')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Languages </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Packages',
                    }"
                    @click="onClickRouterPackage('Packages')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Packages </span>
                  </a>
                </li>

                <li class="my-px">
                  <a
                    :class="{
                      'bg-gray-100 text-gray-700': activeTab === 'Locations',
                    }"
                    @click="onClickRouterLocation('Locations')"
                    class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span
                      class="flex items-center justify-center text-lg text-gray-400"
                    >
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>

                    <span class="ml-3">Locations </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="h-[50px]">
          <div
            class="inline-flex relative items-center px-[10px] py-[10px] w-full text-base font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
          >
            <span class="flex items-center justify-center text-lg text-red-400">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />

                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>

            <span class="ml-3">Theme</span>
          </div>
        </div>
      </div>
    </div>
  </aside>

  <aside
    v-show="!isScream"
    id="sidebar-multi-level-sidebar"
    class="sidebar w-16 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-800"
  >
    <!--  -->
    <img
      class="mr-2 w-[20px] h-[20px] fill-current"
      src="../../assets/icon_svg/ic_dashboard.svg"
      alt=""
    />
  </aside>
</template>
<script>
export default {
  name: "sidebar-admin",

  data() {
    return {
      showDropDown: false,
      selected: "",
      selectedProfile: "",
      isShow: 1,
      activeTab: null,
      isScream: true,
    };
  },

  computed: {
    roleAdmin() {
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (localUser.role === "admin") {
        return "admin";
      } else if (localUser.role === "operator") {
        return "operator";
      } else {
        return "reporter";
      }
    },
  },

  mounted() {},

  methods: {
    onClickRouterDashboard(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard" }).catch(() => {});
    },

    onClickRouterAccount(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
    },

    onClickRouterReport(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/report-list" }).catch(() => {});
    },

    onClickRouterActivities(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/activities-list" }).catch(() => {});
    },

    onClickRouterTemPlate(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/template" }).catch(() => {});
    },

    onClickRouterBrowse(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/browse-photos" }).catch(() => {});
    },

    onClickRouterUser(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/list-user" }).catch(() => {});
    },

    onClickRouterInterest(val) {
      this.activeTab = val;
      this.$router
        .push({ path: "/dashboard/profile/interest" })
        .catch(() => {});
    },

    onClickRouterSexual(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/profile/sexual" }).catch(() => {});
    },

    onClickRouterGender(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/profile/gender" }).catch(() => {});
    },

    onClickRouterLanguage(val) {
      this.activeTab = val;
      this.$router
        .push({ path: "/dashboard/profile/language" })
        .catch(() => {});
    },

    onClickRouterPackage(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/profile/package" }).catch(() => {});
    },

    onClickRouterLocation(val) {
      this.activeTab = val;
      this.$router
        .push({ path: "/dashboard/profile/location" })
        .catch(() => {});
    },

    onClickRouterSchool(val) {
      this.activeTab = val;
      this.$router.push({ path: "/dashboard/profile/school" }).catch(() => {});
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>

<style lang="scss" scoped></style>
